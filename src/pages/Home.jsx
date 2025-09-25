export default function Home() {
  return (
    <section>
      <div className="section-dark">
        <div className="container-default py-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">St. John Church of God In Christ</h1>
          <p className="mt-4 text-lg max-w-3xl">
            “Living Hope for Real People… Igniting Faith, Inspiring Hope, and Impacting Lives”
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn-primary">Plan Your Visit</a>
            <a href="/sermons" className="btn-outline">Watch Sermons</a>
          </div>
        </div>
      </div>

      <div className="container-default section">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-sjBlue">Service Times</h3>
            <p className="mt-2">Sunday School — 9:45am</p>
            <p>Morning Worship — 11:00am</p>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-sjBlue">Mid-Week</h3>
            <p className="mt-2">Bible Study — Wed 7:00pm (in person & Zoom)</p>
            <p>Morning Prayer — Mon–Sat 6:00am (Zoom)</p>
            <p>Friday Morning Prayer — 9:30am (Sanctuary)</p>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-sjBlue">Location</h3>
            <p className="mt-2">750 Bernard Street, Cocoa, FL 32922</p>
            <a className="btn-outline mt-4" href="/contact">Get Directions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
