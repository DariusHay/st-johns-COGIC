import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import HeroSlideshow from "../components/HeroSlideshow";
import logo from "../assets/church-logo copy.png"; // rename lowercase or use ?url
import hero1 from "../assets/Hero1.png";
import hero2 from "../assets/Hero2.png";
import hero3 from "../assets/Hero3.png";
import hero4 from "../assets/Hero4.png";
import hero5 from "../assets/Hero5.png";
import hero6 from "../assets/Hero6.png";
import hero7 from "../assets/Hero7.png";
import hero8 from "../assets/Hero8.png";
import hero9 from "../assets/Hero9.png";
import hero10 from "../assets/Hero10.png";
import hero11 from "../assets/Hero11.png";
import hero12 from "../assets/Hero12.png";
import hero13 from "../assets/Hero13.png";
import hero14 from "../assets/Hero14.png";
import hero15 from "../assets/Hero15.png";
import church from "../assets/church.jpg";
// Hero images (can be local or remote URLs)

const HERO_SRC =
  "https://unsplash.com/photos/jBI220z-cU4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8U2FsdmF0aW9ufGVufDB8fHx8MTc1OTM0NzIyM3ww&force=true";

const HERO_INTERVAL = 6000;

const HERO_IMAGES = [
  {
    src: HERO_SRC,
    pos: "0% 20%",
    mobilePos: "90% 40%",
    zoom: 1.1,
    motion: "rl",   // left → right
  },
  {
    src: hero1,
    pos: "center 0%",
    mobilePos: "center 0%",
    zoom: 1.1,
    motion: "tb",   // top → bottom
  },
  {
    src: hero11,
    pos: "20% 0%",
    mobilePos: "0% 0%",
    zoom: 1.4,
    motion: "bt",   // right → left
  },
  {
    src: hero5,
    pos: "center 5%",
    mobilePos: "80% 0%",
    zoom: 1.2,
    motion: "tb",   // bottom → top
  },
  {
    src: church,
    pos: "20% 20%",
    mobilePos: "60% 45%",
    zoom: 2.0,
    motion: "lr",   // left → right
  },
  {
    src: hero6,
    pos: "center 20%",
    mobilePos: "center 40%",
    zoom: 1.2,
    motion: "tb",   // top → bottom
  },
  {
    src: hero12,
    pos: "80% 30%",
    mobilePos: "center 35%",
    zoom: 1.1,
    motion: "bt",   // right → left
  }
];



export default function Home() {
  const [ready, setReady] = useState(false);
  const [dockLogo, setDockLogo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDockLogo(true), Math.max(0, HERO_INTERVAL - 300));
    return () => clearTimeout(t);
  }, []);

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

            {/* <img
              src={logo}
              alt="St. John COGIC Logo"
              className={[
                "absolute z-10 transition-all duration-700 ease-out",
                // Start centered and same size as your original static logo (h-28 sm:h-32 md:h-[18rem])
                dockLogo
                  ? "top-4 left-4 h-24 sm:h-28 md:h-32 translate-x-0 translate-y-0"
                  : "top-1/2 left-1/2 h-28 sm:h-32 md:h-[18rem] -translate-x-1/2 -translate-y-1/2",
                ready ? "opacity-100" : "opacity-0",
              ].join(" ")}
            /> */}




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

      {/* 👇 ADD THIS BIBLE LINK SECTION 👇 */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <a
          href="https://www.biblegateway.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sjBurgundy hover:text-sjBlue transition-all duration-200 text-lg font-semibold"
        >
          <BookOpen size={22} />
          <span className="underline">Read the Bible Now</span>
        </a>
      </div>
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
          <h2 className="h-section text-sjBurgundy">Superintendant Terrance Reaves, Sr. & Lady Robin Reaves</h2>
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
              We are blessed to be led by Supt. Terrance Reaves, Sr. and First Lady Robin Reaves.
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
