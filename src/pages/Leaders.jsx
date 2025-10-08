import hero11 from "../assets/hero11.png";
import hero12 from "../assets/hero12.png";

export default function Leaders() {
  return (
    <>
      {/* Hero */}
      <div className="section-hero">
        <div className="container-default py-8 text-center">
          <div className="h-eyebrow">Our Leaders</div>
          <h1 className="h-hero">Superintendent T. Reaves, Sr. & Lady Robin Reaves</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-default section grid lg:grid-cols-3 gap-8">
        {/* Bio text */}
        <div className="lg:col-span-2">
          <h2 className="h-section text-sjBurgundy">Biography</h2>
          <p className="mt-3 text-slate-700">
            [Placeholder] Superintendent T. Reaves, Sr. has faithfully served the people of Cocoa, FL for decades,
            ministering the Gospel of Jesus Christ with integrity, humility, and power. Under his leadership, St. John
            COGIC continues to grow as a worshiping, praying, and mission-minded church.
          </p>
          <p className="mt-3 text-slate-700">
            [Placeholder] First Lady Robin Reaves is a compassionate leader who supports families, encourages the next
            generation, and models a life of prayer and service. Together, they serve as a powerful team for the glory
            of God.
          </p>

          <h3 className="mt-8 font-semibold text-sjBurgundy">Ministry Focus</h3>
          <ul className="list-disc list-inside mt-2 text-slate-700 space-y-1">
            <li>Preaching and teaching the Word of God</li>
            <li>Prayer, worship, and discipleship</li>
            <li>Community outreach and family support</li>
          </ul>
        </div>

        {/* Photo column */}
        <div className="space-y-4">
          <div className="card overflow-hidden">
            <img
              src={hero11}
              alt="Leaders 1"
              className="w-full h-56 object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src={hero12}
              alt="Leaders 2"
              className="w-full h-56 object-cover"
              style={{ objectPosition: "center 28%" }}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-sjGold">
        <div className="container-default section-tight text-sjInk text-center">
          <p className="font-semibold">
            “And I will give you pastors according to mine heart, which shall feed you with knowledge and understanding.”
            — Jeremiah 3:15
          </p>
        </div>
      </div>
    </>
  );
}
