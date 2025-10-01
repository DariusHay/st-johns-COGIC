import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/church-logo.PNG"; // ensure lower-case .png or add ?url

export default function Home() {
  return (
    <section>
      <div
      className="relative section-hero text-center text-white"
      style={{
        backgroundImage:
          "url('https://unsplash.com/photos/jBI220z-cU4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8U2FsdmF0aW9ufGVufDB8fHx8MTc1OTM0NzIyM3ww&force=true')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Maroon glaze overlay */}
      <div className="absolute inset-0 bg-sjMaroon/80"></div>

      {/* Content */}
      <div className="relative container-default py-20">
        {/* Logo animation */}
        <motion.img
          src={logo}
          alt="St. John COGIC Logo"
          className="h-56 md:h-72 w-auto mx-auto mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Title animation */}
        <motion.h1
          className="h-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          St. John Church of God In Christ
        </motion.h1>

        {/* Tagline animation */}
        <motion.p
          className="mt-3 text-lg max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          “Living Hope for Real People… Igniting Faith, Inspiring Hope, and Impacting Lives”
        </motion.p>

        {/* Buttons animation */}
        <motion.div
          className="mt-6 flex gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link to="/contact" className="btn-gold">
            Plan Your Visit
          </Link>
          {/* <Link to="/sermons" className="btn-ghost-light font-semibold">
            Watch Sermons
          </Link> */}
        </motion.div>
      </div>
    </div>

      {/* THREE FEATURED CARDS (image-forward, COGIC-like feel) */}
      <motion.div
        className="container-default section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
      <div className="container-default section">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <img className="card-img" src="https://unsplash.com/photos/TnjzgonRFPU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTk2fHxzdGFydCUyMHRpbWV8ZW58MHx8fHwxNzU5MzQ0NzMwfDA&force=true" alt="Worship" />
            <div className="p-5">
              <div className="h-eyebrow">Join Us</div>
              <h3 className="font-bold text-xl mt-1 text-sjBurgundy">Service Times</h3>
              <p className="mt-2 text-sm text-slate-700">Sunday School — 9:45am • Morning Worship — 11:00am</p>
              <Link to="/contact" className="btn-gold mt-4 inline-flex">Plan a Visit</Link>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-hidden h-48">
              <img className="card-img object-cover object-bottom"
                src="https://unsplash.com/photos/9zsHNt5OpqE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MzQxOTE4fA&force=true" alt="Bible Study"
              />
            </div>
            <div className="p-5">
              <div className="h-eyebrow">Mid-Week</div>
              <h3 className="font-bold text-xl mt-1 text-sjBurgundy">Bible Study & Prayer</h3>
              <p className="mt-2 text-sm text-slate-700">Wed 7pm (in-person & Zoom) • Morning Prayer M–Sat 6am • Fri Prayer 9:30am</p>
              <Link to="/events" className="btn-gold mt-4 inline-flex">See Details</Link>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="https://unsplash.com/photos/1f-GoPoJeug/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MzQ0ODU3fA&force=true" alt="Give" />
            <div className="p-5">
              <div className="h-eyebrow">Support</div>
              <h3 className="font-bold text-xl mt-1 text-sjBurgundy">Giving</h3>
              <p className="mt-2 text-sm text-slate-700">Cash App: <b>$StJohn750</b> • Zelle: <b>stjohncogic750@gmail.com</b> • Givelify</p>
              <Link to="/giving" className="btn-gold mt-4 inline-flex">Give Now</Link>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      {/* MINISTRIES GRID (with image slots)
      <div className="bg-sjCream">
        <div className="container-default section">
          <div className="text-center">
            <div className="h-eyebrow">Community</div>
            <h2 className="h-section text-sjBurgundy">Ministries</h2>
            <p className="mt-2 max-w-2xl mx-auto text-slate-700">Serving families, youth, and our neighbors in Cocoa.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Youth", img: "https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?q=80&w=1200&auto=format&fit=crop" },
              { name: "Women", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" },
              { name: "Outreach", img: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop" },
            ].map((m) => (
              <div key={m.name} className="card">
                <img src={m.img} alt={m.name} className="card-img" />
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-sjBurgundy">{m.name}</h3>
                  <p className="mt-2 text-sm text-slate-700">Add a short description for {m.name} ministry.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERMON HIGHLIGHT (YouTube placeholder) */}
      {/* <div className="container-default section">
        <div className="text-center">
          <div className="h-eyebrow">Word of God</div>
          <h2 className="h-section text-sjBurgundy">Latest Sermon</h2>
        </div>
        <div className="mt-6 aspect-video rounded-2xl overflow-hidden shadow border">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Latest Sermon"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div> */}

      {/* GOLD CTA BANNER */}
      <div className="bg-sjGold">
        <div className="container-default section-tight text-sjInk text-center">
          <p className="font-semibold">Visit us this Sunday • 750 Bernard Street, Cocoa, FL 32922 • (321) 636-0305</p>
        </div>
      </div>
    </section>
  );
}
