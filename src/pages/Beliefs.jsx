export default function Beliefs() {
  const points = [
    "The Bible is the inspired and only infallible written Word of God.",
    "There is only One God, eternally existent in three persons: Father, Son, and Holy Spirit.",
    "The blessed Hope is the rapture of the Church of God in Christ at His return.",
    "Cleansing from sin comes through repentance and faith in the precious Blood of Jesus Christ.",
    "Regeneration by the Holy Ghost is absolutely essential for personal salvation.",
    "Christ’s redemptive work on the Cross provides healing for the human body in answer to believing prayer.",
    "The Baptism of the Holy Spirit (Acts 2:4) is given to believers who ask for it.",
    "By the sanctifying power of the Holy Spirit, believers can live a holy and separated life in the present world.",
  ];
  return (
    <div className="container-default section">
      <h1 className="text-3xl font-bold">What We Believe</h1>
      <ul className="mt-6 list-disc pl-6 space-y-2">{points.map(p => <li key={p}>{p}</li>)}</ul>
    </div>
  );
}
