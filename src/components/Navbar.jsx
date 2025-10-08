import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/church-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/beliefs", label: "What We Believe" },
  // { to: "/ministries", label: "Ministries" },
  { to: "/events", label: "Events" },
  { to: "/leaders", label: "Our Leaders" },
  // { to: "/sermons", label: "Sermons" },
  { to: "/giving", label: "Giving" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase = "block px-3 py-2 rounded-md text-sm font-medium transition";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "bg-sjBurgundy/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-default h-16 flex items-center justify-between">
        {/* Logo + Always-show text */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="St. John COGIC Logo" className="h-12 w-auto" />
          <span
            className={`font-bold tracking-tight text-xl ${
              scrolled ? "text-white" : "text-sjMaroon"
            }`}
          >
            St. John COGIC
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className={`md:hidden p-2 rounded ${
            scrolled
              ? "border border-white/30 text-white"
              : "border border-sjMaroon text-sjMaroon"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    scrolled
                      ? "text-white/90 hover:text-sjGold"
                      : "text-sjMaroon hover:text-sjGold"
                  } ${isActive ? "text-sjGold font-semibold" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul
          className={`md:hidden border-t ${
            scrolled ? "bg-sjBurgundy/95 border-white/10" : "bg-white border-sjMaroon/20"
          }`}
        >
          {nav.map((n) => (
            <li key={n.to} className="container-default">
              <NavLink
                to={n.to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    scrolled
                      ? "text-white/90 hover:text-sjGold"
                      : "text-sjMaroon hover:text-sjGold"
                  } ${isActive ? "font-semibold" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

