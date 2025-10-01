import logo from "../assets/church.jpg";

export default function About() {
  return (
    <>
      <div className="section-hero">
        <div className="container-default py-8 text-center">
          <div className="h-eyebrow">Who We Are</div>
          <h1 className="h-hero">About Us</h1>
        </div>
      </div>

      <div className="container-default section grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Mission & Vision (keep your existing copy) */}
          <h2 className="h-section text-sjBurgundy">Our Mission</h2>
          <p className="mt-2 text-slate-700">To nurture a caring and Spirit-filled environment where every individual is valued, empowered, and equipped to serve God and others. We are dedicated to fostering spiritual growth, outreach, and unity in Christ, demonstrating love through action and prayer.</p>

          <h2 className="h-section text-sjBurgundy mt-8">Our Vision</h2>
          <p className="mt-2 text-slate-700">Empowered by the Holy Spirit, we are a vibrant, loving church committed to transforming lives through faith, worship, and service—bringing hope and salvation to our community and beyond.</p>
        </div>
        <div className="card overflow-hidden relative">
          <img
            src={logo}
            alt="St. John COGIC"
            className="w-full h-64 object-cover transform transition-transform duration-700 scale-125 hover:scale-150"
          />
          <div className="absolute bottom-0 w-full bg-sjGold/90 text-sjInk py-3">
            <p className="text-center font-semibold">
              Serving Cocoa, FL for over 100 years
            </p>
          </div>
        </div>


      </div>
    </>
  );
}
