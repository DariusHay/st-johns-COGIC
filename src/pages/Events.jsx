export default function Events() {
  return (
    <div className="container-default section">
      <h1 className="text-3xl font-bold">Events</h1>

      <h2 className="mt-6 text-xl font-semibold text-sjBlue">Weekly & Recurring</h2>
      <ul className="mt-3 space-y-2">
        <li>Bible Study — Wednesdays 7:00pm (in person & via Zoom)</li>
        <li>Morning Prayer — Monday–Saturday 6:00am (Zoom)</li>
        <li>Friday Morning Prayer — 9:30am (Sanctuary)</li>
      </ul>

      <div className="mt-6 border rounded-xl p-4 bg-sjGold/10">
        <h3 className="font-semibold">Zoom Details</h3>
        <p className="mt-1">Meeting ID: 869 7414 0213 • Passcode: 206576</p>
        <p className="truncate">
          Link: <a className="text-sjBlue underline" href="https://us06web.zoom.us/j/86974140213?pwd=PfaNztw6aqIWUUHN6p9ZaartZxl4rU.1" target="_blank" rel="noreferrer">Join on Zoom</a>
        </p>
      </div>

      <h2 className="mt-8 text-xl font-semibold text-sjBlue">Special Events</h2>
      <p className="mt-2">[Add upcoming events & flyers as provided]</p>
    </div>
  );
}
