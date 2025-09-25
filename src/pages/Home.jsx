import { Link } from "react-router-dom";
import logo from "../assets/church-logo.PNG";

export default function Home() {
  return (
    <section>
      <div className="section-dark text-center">
        <div className="container-default py-6">
          {/* Logo */}
          <img
            src={logo}
            alt="St. John COGIC Logo"
            className="h-56 md:h-72 w-auto mx-auto mb-0"
          />

          {/* Church Name */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
            St. John Church of God In Christ
          </h1>

          {/* Tagline */}
          <p className="text-lg max-w-3xl mx-auto mb-6">
            “Living Hope for Real People… Igniting Faith, Inspiring Hope, and Impacting Lives”
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center mb-20">
            <Link to="/contact" className="btn-primary">
              Plan Your Visit
            </Link>
            <Link to="/sermons" className="btn-outline font-semibold">
              Watch Sermons
            </Link>
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
            <Link to="/contact" className="btn-outline mt-4">Get Directions</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
