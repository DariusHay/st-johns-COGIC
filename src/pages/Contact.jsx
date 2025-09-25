import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container-default section">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        {!submitted ? (
          <form
            action="https://formspree.io/f/xqayadjo"  // 👈 replace with your Formspree endpoint
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input
              className="w-full border rounded p-3"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full border rounded p-3"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full border rounded p-3"
              rows="5"
              name="message"
              placeholder="Message or Prayer Request"
              required
            />
            <button type="submit" className="btn-primary">
              Send
            </button>
          </form>
        ) : (
          <div className="p-6 border rounded bg-green-50 text-green-700">
            <h2 className="text-xl font-semibold">Thank you!</h2>
            <p className="mt-2">
              Your message or prayer request has been received. Someone from
              St. John COGIC will reach out soon.
            </p>
          </div>
        )}

        <div>
          <p>
            <strong>Address:</strong> 750 Bernard Street, Cocoa, FL 32922
          </p>
          <p className="mt-2">
            <strong>Phone:</strong> (321) 636-0305
          </p>
          <p className="mt-2">
            <strong>Email:</strong> stjohncogic750@gmail.com
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
    </div>
  );
}

