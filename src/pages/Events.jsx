export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <div className="section-hero">
        <div className="container-default py-8 text-center">
          <div className="h-eyebrow">Church Calendar</div>
          <h1 className="h-hero">Events</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-default section">
        {/* Weekly & Recurring */}
        <h2 className="text-xl font-semibold text-sjBurgundy">Weekly & Recurring</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>Bible Study — Wednesdays 7:00pm (in person & via Zoom)</li>
          <li>Morning Prayer — Monday–Saturday 6:00am (Zoom)</li>
          <li>Friday Morning Prayer — 9:30am (Sanctuary)</li>
        </ul>

        {/* Zoom Details */}
        <div className="mt-6 border rounded-xl p-5 bg-sjGold/10">
          <h3 className="font-semibold text-sjBurgundy">Zoom Details</h3>
          <p className="mt-1 text-slate-700">
            Meeting ID: 869 7414 0213 • Passcode: 206576
          </p>
          <p className="truncate text-slate-700">
            Link:{" "}
            <a
              className="text-sjMaroon underline font-medium"
              href="https://us06web.zoom.us/j/86974140213?pwd=PfaNztw6aqIWUUHN6p9ZaartZxl4rU.1"
              target="_blank"
              rel="noreferrer"
            >
              Join on Zoom
            </a>
          </p>
        </div>

        {/* Special Events */}
        <h2 className="mt-8 text-xl font-semibold text-sjBurgundy">Special Events</h2>
        <p className="mt-2 text-slate-700">None at this time</p>

        {/* Upcoming Events Placeholder */}
        <div className="mt-12 text-center">
          <h2 className="h-section text-sjBurgundy">Upcoming Events</h2>
          <p className="mt-3 text-slate-700">
            We have exciting events planned for the future! Please check back
            soon for updates, or join us for our weekly services and Bible
            studies.
          </p>
          <div className="mt-6 border border-dashed border-sjGold rounded-xl py-8 px-6 bg-sjCream/40">
            <p className="text-sjMaroon font-semibold">
              📅 No upcoming events at this time
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Stay connected for announcements and new opportunities to
              fellowship together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

