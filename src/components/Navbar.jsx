import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/beliefs", label: "What We Believe" },
  { to: "/ministries", label: "Ministries" },
  { to: "/events", label: "Events" },
  { to: "/sermons", label: "Sermons" },
  { to: "/giving", label: "Giving" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="container-default h-16 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-tight text-xl">
          <span className="text-sjGold">St. John</span> COGIC
        </Link>
        <button className="md:hidden p-2 border rounded" onClick={() => setOpen(!open)} aria-label="Toggle Menu">☰</button>
        <ul className="hidden md:flex gap-1">
          {nav.map(n => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                className={({isActive}) => `px-3 py-2 rounded text-sm font-medium hover:bg-sjGold/10 ${isActive ? "bg-sjGold/10" : ""}`}
                onClick={() => setOpen(false)}
              >{n.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="md:hidden border-t bg-white">
          {nav.map(n => (
            <li key={n.to} className="container-default">
              <NavLink to={n.to} className="block py-3" onClick={() => setOpen(false)}>{n.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
