import flyer from "../assets/events/family-friends-day.jpg";
import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function Events() {

  const [showFlyer, setShowFlyer] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div className="section-hero">
        <div className="container-default py-8 text-center">
          <div className="h-eyebrow">Church Calendar</div>
          <h1 className="h-hero">Events</h1>
        </div>
      </div>

      {/* 👇 ADD THIS BIBLE LINK SECTION 👇 */}
      <div className="flex items-center justify-center gap-2 mt-4">
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

      {/* Content Section */}
      <div className="container-default section">
        {/* Weekly & Recurring */}
        <h2 className="text-xl font-semibold text-sjBurgundy">Weekly & Recurring</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>Bible Study — Wednesdays 7:00pm (in person & via Zoom)</li>
          <li>Morning Prayer — Monday–Saturday 6:00am (Zoom)</li>
          <li>Friday Morning Prayer — 9:30am (Sanctuary)</li>
        </ul>

        {/* Zoom Details */}
        <div className="mt-6 border rounded-xl p-5 bg-sjGold/10">
          <h3 className="font-semibold text-sjBurgundy">Zoom Details</h3>
          <p className="mt-1 text-slate-700">
            Meeting ID: 869 7414 0213 • Passcode: 206576
          </p>
          <p className="truncate text-slate-700">
            Link:{" "}
            <a
              className="text-sjMaroon underline font-medium"
              href="https://us06web.zoom.us/j/86974140213?pwd=PfaNztw6aqIWUUHN6p9ZaartZxl4rU.1"
              target="_blank"
              rel="noreferrer"
            >
              Join on Zoom
            </a>
          </p>
        </div>

        {/* Special Events */}
        <h2 className="mt-8 text-xl font-semibold text-sjBurgundy">Special Events</h2>
        {/* Family & Friends Day */}
        <div className="mt-4 grid md:grid-cols-3 gap-6 items-start">
          {/* Flyer (replace src with your flyer image path when ready) */}
          {/* Flyer (clickable) */}
          <div className="md:col-span-1">
            <div
              className="card overflow-hidden cursor-pointer hover:opacity-90 transition"
              onClick={() => setShowFlyer(true)}
            >
              <div className="aspect-[4/5] bg-slate-100 text-center">
                <img
                  src={flyer}
                  alt="Family & Friends Day Flyer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-slate-600 mt-2 italic text-center">
                Click to enlarge
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2">
            <div className="card">
              <div className="p-5">
                <div className="h-eyebrow">Special Service</div>
                <h3 className="font-bold text-2xl mt-1 text-sjBurgundy">Family &amp; Friends Day</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li><strong>Date:</strong> Sunday, November 16, 2025</li>
                  <li><strong>Time:</strong> 3:00 PM</li>
                  <li><strong>Location:</strong> St. John COGIC — 750 Bernard Street, Cocoa, FL 32922</li>
                </ul>
                <p className="mt-4 text-slate-700">
                  We’d love to celebrate with you—bring your family and invite a friend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Flyer Lightbox Modal */}
      {showFlyer && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowFlyer(false)}
        >
          <img
            src={flyer}
            alt="Family & Friends Day Flyer"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
          />
          <button
            onClick={() => setShowFlyer(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

