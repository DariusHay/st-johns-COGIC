export default function Beliefs() {
  return (
    <>
      <div className="section-hero">
        <div className="container-default py-8 text-center">
          <div className="h-eyebrow">Our Faith</div>
          <h1 className="h-hero">What We Believe</h1>
        </div>
      </div>

      <div className="container-default section text-center">
      {/* Add the biblical-style font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="max-w-4xl mx-auto text-sjInk leading-relaxed"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {/* Opening statement */}
        <p className="text-2xl md:text-3xl font-bold mb-6 text-sjBurgundy">
          As a Church of God in Christ congregation, we believe in the power of
          the Holy Spirit and the full authority of God’s Word.
        </p>

        {/* Main belief list */}
        <div className="space-y-4 text-lg md:text-xl text-slate-800">
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe
            the Bible to be the inspired and only infallible written Word of
            God.
          </p>
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe
            that there is one God, eternally existent in three persons: God the
            Father, God the Son, and God the Holy Spirit.
          </p>
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe
            in the blessed hope, which is the rapture of the Church of God,
            which is in Christ, at His return.
          </p>
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe
            that the only means of being cleansed from sin is through repentance
            and faith in the precious blood of Jesus Christ.
          </p>
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe
            that regeneration by the Holy Ghost is absolutely essential for
            personal salvation.
          </p>
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe
            that the redemptive work of Christ on the cross provides healing for
            the human body in answer to believing prayer.
          </p>
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe
            that the baptism in the Holy Ghost, according to Acts 2:4, is given
            to believers who ask for it.
          </p>
          <p>
            <span className="font-semibold text-sjBurgundy">W</span>e believe in
            the sanctifying power of the Holy Spirit, by whose indwelling the
            Christian is enabled to live a holy and separated life in this
            present world.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
