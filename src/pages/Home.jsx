import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/church-logo.PNG"; // rename lowercase or use ?url

const HERO_SRC =
  "https://unsplash.com/photos/jBI220z-cU4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8U2FsdmF0aW9ufGVufDB8fHx8MTc1OTM0NzIyM3ww&force=true";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: `url('${HERO_SRC}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Preload image and start animations when loaded */}
        <img
          src={HERO_SRC}
          alt=""
          aria-hidden="true"
          className="hidden"
          loading="eager"
          decoding="async"
          onLoad={() => setReady(true)}
        />

        {/* Maroon glaze */}
        <div className="absolute inset-0 bg-sjMaroon/80" />

        {/* Content */}
        <div className="relative container-default min-h-[60vh] flex flex-col items-center justify-center py-16 text-center">
          {/* Logo */}
          <img
            src={logo}
            alt="St. John COGIC Logo"
            className={
              "h-56 md:h-72 w-auto mb-3 transition-all duration-1000 " +
              (ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")
            }
            style={{ transitionDelay: "0ms" }} // immediately after image loads
          />

          {/* Title */}
          <h1
            className={
              "h-hero transition-all duration-1000 " +
              (ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")
            }
            style={{ transitionDelay: "600ms" }} // wait 1s after logo
          >
            St. John Church of God In Christ
          </h1>

          {/* Tagline */}
          <p
            className={
              "mt-2 text-lg max-w-3xl mx-auto transition-all duration-1000 transform " +
              (ready
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3")
            }
            style={{ transitionDelay: "1000ms" }}
          >
            “Living Hope for Real People… Igniting Faith, Inspiring Hope, and Impacting Lives”
          </p>


          {/* Buttons */}
          <div
            className={
              "mt-6 flex gap-3 justify-center transition-all duration-1000 " +
              (ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
            }
            style={{ transitionDelay: "2000ms" }} // wait 1.2s after tagline
          >
            <Link to="/contact" className="btn-gold">Plan Your Visit</Link>
            
          </div>

        </div>
      </section>

      {/* FEATURED CARDS */}
      <motion.div
        className="container-default section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {/* Worship card */}
          <div className="card">
            <img
              className="card-img"
              src="https://unsplash.com/photos/TnjzgonRFPU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTk2fHxzdGFydCUyMHRpbWV8ZW58MHx8fHwxNzU5MzQ0NzMwfDA&force=true"
              alt="Worship"
            />
            <div className="p-5">
              <div className="h-eyebrow">Join Us</div>
              <h3 className="font-bold text-xl mt-1 text-sjBurgundy">Service Times</h3>
              <p className="mt-2 text-sm text-slate-700">
                Sunday School — 9:45am • Morning Worship — 11:00am
              </p>
              <Link to="/contact" className="btn-gold mt-4 inline-flex">
                Plan a Visit
              </Link>
            </div>
          </div>

          {/* Bible Study card */}
          <div className="card overflow-hidden">
            <div className="overflow-hidden h-48">
              <img
                className="card-img object-cover object-[center_70%]"
                src="https://unsplash.com/photos/9zsHNt5OpqE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MzQxOTE4fA&force=true"
                alt="Bible Study"
              />
            </div>
            <div className="p-5">
              <div className="h-eyebrow">Mid-Week</div>
              <h3 className="font-bold text-xl mt-1 text-sjBurgundy">Bible Study & Prayer</h3>
              <p className="mt-2 text-sm text-slate-700">
                Wed 7pm (in-person & Zoom) • Morning Prayer M–Sat 6am • Fri Prayer 9:30am
              </p>
              <Link to="/events" className="btn-gold mt-4 inline-flex">
                See Details
              </Link>
            </div>
          </div>

          {/* Giving card */}
          <div className="card">
            <img
              className="card-img object-cover"
              src="https://unsplash.com/photos/1f-GoPoJeug/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MzQ0ODU3fA&force=true"
              alt="Give"
            />
            <div className="p-5">
              <div className="h-eyebrow">Support</div>
              <h3 className="font-bold text-xl mt-1 text-sjBurgundy">Giving</h3>
              <p className="mt-2 text-sm text-slate-700">
                Cash App: <b>$StJohn750</b> • Zelle: <b>stjohncogic750@gmail.com</b> • Givelify
              </p>
              <Link to="/giving" className="btn-gold mt-4 inline-flex">
                Give Now
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* GOLD CTA BANNER */}
      <div className="bg-sjGold">
        <div className="container-default section-tight text-sjInk text-center">
          <p className="font-semibold">
            Visit us this Sunday • 750 Bernard Street, Cocoa, FL 32922 • (321) 636-0305
          </p>
        </div>
      </div>
    </>
  );
}
