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

      {/* Content */}
      <div className="container-default section grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="h-section text-sjBurgundy">Ways to Give</h2>
          <p className="mt-2 text-slate-700">
            Thank you for supporting the ministry of St. John COGIC. Your
            generous giving helps us to serve our community, support missions,
            and share the Gospel of Jesus Christ.
          </p>
          <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
            <li><strong>Cash App:</strong> $StJohn750</li>
            <li><strong>Zelle:</strong> stjohncogic750@gmail.com</li>
            <li><strong>Givelify:</strong> Search “St. John COGIC Cocoa, FL”</li>
          </ul>
        </div>

        <div className="card overflow-hidden relative">
          <img
            src="https://unsplash.com/photos/1f-GoPoJeug/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MzQ0ODU3fA&force=true"
            alt="Giving"
            className="w-full h-80 object-cover"
            style={{ objectPosition: "center 65%" }} // 👈 shifts view down slightly
          />
          <div className="absolute bottom-0 w-full bg-sjGold/90 text-sjInk py-2 text-center font-semibold">
            “God loves a cheerful giver” — 2 Corinthians 9:7
          </div>
        </div>



      </div>
    </>
  );
}
