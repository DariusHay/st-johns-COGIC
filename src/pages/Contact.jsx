export default function Contact() {
  return (
    <div className="container-default section">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input className="w-full border rounded p-3" placeholder="Name" />
          <input className="w-full border rounded p-3" placeholder="Email" />
          <textarea className="w-full border rounded p-3" rows="5" placeholder="Message or Prayer Request" />
          <button type="button" className="btn-primary">Send</button>
        </form>
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
