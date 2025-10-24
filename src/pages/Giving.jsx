import { Mail } from "lucide-react";
import givelifyLogo from "../assets/logos/givelify.png"
import cashappLogo from "../assets/logos/cashapp.png"
import zelleLogo from "../assets/logos/zelle.jpg"

export default function Giving() {
  return (
    <>
      {/* Hero */}
      <div className="section-hero">
        <div className="container-default py-8 text-center">
          <div className="h-eyebrow">Support the Ministry</div>
          <h1 className="h-hero">Giving</h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container-default text-center mb-10 mt-6">
        <h2 className="h-section text-sjBurgundy">Ways to Give</h2>
        <p className="mt-2 text-slate-700 max-w-2xl mx-auto">
          Thank you for supporting the ministry of St. John COGIC. Your
          generous giving helps us to serve our community, support missions,
          and share the Gospel of Jesus Christ.
        </p>
      </div>

      {/* Four Giving Cards */}
      <div className="container-default grid md:grid-cols-2 gap-6">
        {/* CASH APP */}
        <a
          href="https://cash.app/$Stjohn750"
          target="_blank"
          rel="noreferrer"
          className="card hover:shadow-lg transition-shadow"
          aria-label="Give via Cash App"
        >
          <div className="p-5 flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#00C244" }}
            >
              {/* Cash App Logo */}
              <img src={cashappLogo} alt="Cash App" className="w-12 h-12 rounded-xl" />

            </div>
            <div>
              <div className="font-semibold text-lg">Cash App</div>
              <div className="text-slate-600">$Stjohn750</div>
              <div className="text-sjBlue underline text-sm">
                Give with Cash App
              </div>
            </div>
          </div>
        </a>

        {/* ZELLE */}
        <div className="card">
          <div className="p-5 flex items-center gap-4">
            <div
              className="w-16 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6D1ED4" }}
            >
              <img src={zelleLogo} alt="Cash App" className="w-16 h-12 rounded-xl" />

            </div>
            <div>
              <div className="font-semibold text-lg">Zelle</div>
              <div className="text-slate-600">
                Send to: <b>stjohncogic750@gmail.com</b>
              </div>
              <div className="text-sm text-slate-500">
                Use your bank’s Zelle app
              </div>
            </div>
          </div>
        </div>

        {/* GIVELIFY */}
        <a
          href="https://www.givelify.com/donate/NTQzOTQ=/selection"
          target="_blank"
          rel="noreferrer"
          className="card hover:shadow-lg transition-shadow"
          aria-label="Give via Givelify"
        >
          <div className="p-5 flex items-center gap-4">
            <div
              className="w-14 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#0075FF" }}
            >
              <img src={givelifyLogo} alt="Cash App" className="w-14 h-12 rounded-xl" />

            </div>
            <div>
              <div className="font-semibold text-lg">Givelify</div>
              <div className="text-slate-600">Quick & secure giving</div>
              <div className="text-sjBlue underline text-sm">
                Give with Givelify
              </div>
            </div>
          </div>
        </a>

        {/* MAILING ADDRESS */}
        <div className="card">
          <div className="p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sjGold/30 flex items-center justify-center">
              <Mail className="text-sjBurgundy" />
            </div>
            <div>
              <div className="font-semibold text-lg">Mail a Check</div>
              <p className="text-slate-700 mt-1">
                Payable to <b>St. John Church of God in Christ</b>
              </p>
              <address className="not-italic mt-1 text-slate-700">
                P.O. BOX 421<br />
                Cocoa, FL 32923-0421
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Image Centered at Bottom */}
      <div className="container-default section flex flex-col items-center">
        <div className="card overflow-hidden relative max-w-2xl w-full">
          <img
            src="https://unsplash.com/photos/1f-GoPoJeug/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MzQ0ODU3fA&force=true"
            alt="Giving"
            className="w-full h-80 object-cover"
            style={{ objectPosition: 'center 55%'}}
          />
          <div className="absolute bottom-0 w-full bg-sjGold/90 text-sjInk py-2 text-center font-semibold">
            “God loves a cheerful giver” — 2 Corinthians 9:7
          </div>
        </div>
      </div>
    </>
  );
}
