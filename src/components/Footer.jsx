export default function Footer() {
  return (
    <footer className="section-dark mt-16">
      <div className="container-default">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} St. John Church of God In Christ</p>
          <p className="opacity-90">Sundays: Sunday School 9:45am • Morning Worship 11am</p>
          <p className="opacity-90">750 Bernard Street, Cocoa, FL 32922 • (321) 636-0305</p>
        </div>
      </div>
    </footer>
  );
}
