export default function Ministries() {
  const ministries = [
    { name: "Youth", desc: "Weekly gatherings and special events." },
    { name: "Women", desc: "Fellowship, prayer, and service." },
    { name: "Outreach", desc: "Serving our local community." },
  ];
  return (
    <div className="container-default section">
      <h1 className="text-3xl font-bold">Ministries</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {ministries.map((m) => (
          <div key={m.name} className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg">{m.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
