import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  // Auto-hide success after 5s
  useEffect(() => {
    if (!ok) return;
    const t = setTimeout(() => setOk(false), 5000);
    return () => clearTimeout(t);
  }, [ok]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setSending(true);

    // Honeypot: block bots quietly
    const hp = formRef.current?.querySelector("input[name='company']")?.value;
    if (hp) {
      setSending(false);
      return;
    }

    try {
      // EmailJS reads inputs by name when using sendForm
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );
      if (result?.status === 200) {
        setOk(true);
        formRef.current?.reset();
      } else {
        setErr("Failed to send. Please try again or email stjohncogic750@gmail.com.");
      }
    } catch (e) {
      setErr("Network error. Please try again or email stjohncogic750@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="section-hero">
        <div className="container-default py-8 text-center">
          <div className="h-eyebrow">Get in Touch</div>
          <h1 className="h-hero">Contact Us</h1>
        </div>
      </div>

      <div className="container-default section grid md:grid-cols-2 gap-8">
        {/* LEFT: form */}
        <div className="relative">
          {ok && (
            <div className="mb-4 p-4 rounded border bg-green-50 text-green-700" role="status" aria-live="polite">
              <strong>Thank you!</strong> Your message has been sent. We’ll reach out soon.
            </div>
          )}
          {err && (
            <div className="mb-4 p-4 rounded border bg-red-50 text-red-700" role="alert" aria-live="assertive">
              {err}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* These names MUST match your EmailJS template variables */}
            <input type="hidden" name="subject" value="New message from St. John COGIC website" />
            {/* Honeypot (leave empty) */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <input className="w-full border rounded p-3" type="text" name="user_name" placeholder="Name" required />
            <input className="w-full border rounded p-3" type="email" name="user_email" placeholder="Email" required />
            <textarea className="w-full border rounded p-3" rows="5" name="message" placeholder="Message or Prayer Request" required />

            <button type="submit" className="btn-gold" disabled={sending} aria-busy={sending}>
              {sending ? "Sending..." : "Send"}
            </button>

            <p className="text-xs text-slate-500">
              Prefer email?{" "}
              <a className="underline" href="mailto:stjohncocoa@pm.me">stjohncocoa@pm.me</a>
            </p>
          </form>
        </div>

        {/* RIGHT: church info */}
        <div>
          <p><strong>Address:</strong> 750 Bernard Street, Cocoa, FL 32922</p>
          <p className="mt-2"><strong>Phone:</strong> (321) 636-0305</p>
          <p className="mt-2">
            <strong>Email:</strong>{" "}
            <a className="underline" href="mailto:stjohncocoa@pm.me">stjohncocoa@pm.me</a>
          </p>
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
    </>
  );
}
