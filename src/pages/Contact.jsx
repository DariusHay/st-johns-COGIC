import { useState, useEffect } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  // ⏱ auto-reset to show the form again after success
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => {
      setStatus("idle");
      // Optional: scroll back to the form
      // document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 10000); // 10s
    return () => clearTimeout(t);
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xqayadjo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus("error");
        setError(
          j?.errors?.map((er) => er.message).join(" • ") ||
          "There was a problem sending your message. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <div className="container-default section">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        {status !== "success" ? (
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input className="w-full border rounded p-3" type="text" name="name" placeholder="Name" required />
            <input className="w-full border rounded p-3" type="email" name="email" placeholder="Email" required />
            <textarea className="w-full border rounded p-3" rows="5" name="message" placeholder="Message or Prayer Request" required />
            <input type="hidden" name="_subject" value="New Contact from St. John COGIC website" />
            <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
            <button type="submit" className="btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            {status === "error" && (
              <div className="p-3 border rounded bg-red-50 text-red-700">{error}</div>
            )}
          </form>
        ) : (
          <div className="p-6 border rounded bg-green-50 text-green-700">
            <h2 className="text-xl font-semibold">Thank you!</h2>
            <p className="mt-2">
              Your message or prayer request has been received. Someone from St. John COGIC will reach out soon.
              <br />
              (You can submit another request in a moment.)
            </p>
          </div>
        )}

        <div>
          <p><strong>Address:</strong> 750 Bernard Street, Cocoa, FL 32922</p>
          <p className="mt-2"><strong>Phone:</strong> (321) 636-0305</p>
          <p className="mt-2"><strong>Email:</strong> stjohncogic750@gmail.com</p>
          <div className="mt-4">
            <iframe
              title="map"
              className="w-full h-64 border rounded"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=750%20Bernard%20Street%20Cocoa%20FL%2032922&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

