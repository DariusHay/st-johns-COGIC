export default function Footer() {
  return (
    <footer className="mt-16" style={{backgroundImage: "linear-gradient(to right, var(--sjBurgundy, #5B1515), var(--sjMaroon, #7A1E1E))"}}>
      <div className="container-default py-8 text-white/90">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-semibold">St. John Church of God In Christ</p>
          <p className="opacity-95">Sundays: Sunday School 9:45am • Morning Worship 11am</p>
          <p className="opacity-95">750 Bernard Street, Cocoa, FL 32922 • (321) 636-0305</p>
        </div>
        <p className="mt-4 text-xs opacity-70">© {new Date().getFullYear()} St. John COGIC. All rights reserved.</p>
      </div>
    </footer>
  );
}
