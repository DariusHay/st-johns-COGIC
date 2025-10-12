import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSlideshow from "../components/HeroSlideshow";
import logo from "../assets/church-logo.PNG"; // rename lowercase or use ?url
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import hero6 from "../assets/hero6.png";
import hero7 from "../assets/hero7.png";
import hero8 from "../assets/hero8.png";
import hero9 from "../assets/hero9.png";
import hero10 from "../assets/hero10.png";
import hero11 from "../assets/hero11.png";
import hero12 from "../assets/hero12.png";
import hero13 from "../assets/hero13.png";
import hero14 from "../assets/hero14.png";
import hero15 from "../assets/hero15.png";
import church from "../assets/church.jpg";
// Hero images (can be local or remote URLs)

const HERO_SRC =
  "https://unsplash.com/photos/jBI220z-cU4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8U2FsdmF0aW9ufGVufDB8fHx8MTc1OTM0NzIyM3ww&force=true";

const HERO_IMAGES = [
  { src: HERO_SRC, pos: "0% 20%" }, // default starting point
  { src: hero1, pos: "center 0%", zoom: 1}, // default starting point
  // { src: hero2, pos: "20% 21.2%", zoom: 1 },
  // { src: hero3, pos: "center 20%" }, IDK
  // { src: hero4, pos: "0% 10%", zoom: 1.8 }, IDK
  // { src: hero5, pos: "center 5%" },
  { src: church, pos: "20% 20%", zoom: 2 },
  // { src: hero6, pos: "center 25%" },
  // { src: hero7, pos: "20% 26%" }, IDK
  // { src: hero8, pos: "center 34%" }, IDK
  // { src: hero9, pos: "center 15%" }, IDK
  // { src: hero10, pos: "center 20%" }, IDK
  { src: hero11, pos: "center 20%" },
  { src: hero12, pos: "center 33%", zoom: 0.2 },
  // { src: hero13, pos: "center 50%" }, IDK
  // { src: hero14, pos: "center 40%" }, IDK
  // { src: hero15, pos: "center 50%" }, IDK
  // 💡 Replace these with the images the Pastor sent (you can import local images too)
  // "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=1600&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=1600&auto=format&fit=crop",
];

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }} // smooth fade-in
      >
        <HeroSlideshow
          images={HERO_IMAGES}
          interval={6000}
          overlayOpacityClass="bg-sjMaroon/60"
          className="text-center"
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
          <div className="absolute inset-0 bg-sjMaroon/52" />

          {/* Content */}
          <div className="relative container-default min-h-[60vh] flex flex-col items-center justify-center py-6 text-center">

            {/* Logo */}
            <img
              src={logo}
              alt="St. John COGIC Logo"
              className={
                "h-28 sm:h-32 md:h-[18rem] w-auto mb-5 transition-all duration-1000 " +
                (ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")
              }
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
              “Living Hope for Real People. Where we are Igniting Faith, Inspiring Hope and Impacting Lives”
            </p>


            {/* Buttons */}
            <div
              className={
                "mt-6 flex gap-3 justify-center transition-all duration-1000 " +
                (ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
              }
              style={{ transitionDelay: "2000ms", marginBottom: 30 }} // wait 1.2s after tagline
            >
              <Link to="/contact" className="btn-gold">Plan Your Visit</Link>

            </div>

          </div>
        </HeroSlideshow>
      </motion.div>

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

      <section className="container-default section">
        <div className="text-center mb-6">
          <div className="h-eyebrow">Our Leaders</div>
          <h2 className="h-section text-sjBurgundy">Superintendent T. Reaves, Sr. & Lady Robin Reaves</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1">
            <img
              src={hero2}
              alt="Superintendent T. Reaves, Sr. & Lady Robin Reaves"
              className="w-full rounded-2xl shadow border object-cover h-72"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-700">
              We are blessed to be led by Superintendent T. Reaves, Sr. and First Lady Robin Reaves.
              Their heart for God and love for people guide St. John COGIC in worship, service, and community impact.
            </p>
            <div className="mt-4">
              <Link to="/leaders" className="btn-gold">Read Their Bio</Link>
            </div>
          </div>
        </div>
      </section>

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
