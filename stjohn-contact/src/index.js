// Allow localhost (dev) + GH Pages (prod). Adjust if needed.
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "https://dariushay.github.io",
];

function corsHeaders(request) {
  const origin = request.headers.get("origin") || "";
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : "null";
  return {
    "access-control-allow-origin": allow,
    "access-control-allow-methods": "POST,OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
    "content-type": "text/plain; charset=utf-8",
    "vary": "origin",
  };
}

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }
    if (request.method !== "POST") {
      return new Response("Only POST allowed", { status: 405, headers: corsHeaders(request) });
    }

    try {
      const fd = await request.formData();
      const name = (fd.get("name") || "").toString().trim();
      const email = (fd.get("email") || "").toString().trim();
      const message = (fd.get("message") || "").toString().trim();
      const subject = (fd.get("subject") || "New message from church website").toString().trim();
      const honey = (fd.get("company") || "").toString().trim(); // honeypot

      if (honey) return new Response(null, { status: 204, headers: corsHeaders(request) });
      if (!name || !email || !message) {
        return new Response("Missing fields", { status: 400, headers: corsHeaders(request) });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return new Response("Invalid email", { status: 400, headers: corsHeaders(request) });
      }

      const recipient = env.RECIPIENT_EMAIL;
      const fromDomain = (env.FROM_DOMAIN || "").toLowerCase();
      if (!fromDomain) {
        return new Response("Server misconfigured: FROM_DOMAIN not set", { status: 500, headers: corsHeaders(request) });
      }

      const fromEmail = `noreply@${fromDomain}`;

      const text = `Name: ${name}
Email: ${email}

Message / Prayer Request:
${message}
`;
      const html = `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.5">
          <h2 style="margin:0 0 12px">New message from church website</h2>
          <p><strong>Name:</strong> ${escapeHTML(name)}</p>
          <p><strong>Email:</strong> ${escapeHTML(email)}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px">${escapeHTML(message)}</pre>
        </div>
      `;

      // ✅ Reply-To must be TOP-LEVEL "headers" for MailChannels


      const mail = {
        personalizations: [{ to: [{ email: recipient }] }], // recipient = your inbox
        from: { email: fromEmail, name: "Church Contact Form" },
        subject,
        headers: { "Reply-To": `${name} <${email}>` }, // visitor in Reply-To
        content: [
          { type: "text/plain", value: text },
          { type: "text/html", value: html },
        ],
      };

      const resp = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // 👇 REQUIRED: authenticate the sender
          "X-Auth-User": fromEmail,
        },
        body: JSON.stringify(mail),
      });


      if (!resp.ok) {
        const body = await resp.text().catch(() => "");
        // Surface the upstream error text so you can see EXACTLY why it failed
        return new Response(`MailChannels error (${resp.status}): ${body}`, {
          status: 502,
          headers: corsHeaders(request),
        });
      }

      return new Response("Message sent", { status: 200, headers: corsHeaders(request) });
    } catch (e) {
      return new Response(`Worker error: ${e instanceof Error ? e.message : String(e)}`, {
        status: 500,
        headers: corsHeaders(request),
      });
    }
  },
};

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
}
