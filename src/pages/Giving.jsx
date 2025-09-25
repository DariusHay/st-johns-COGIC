export default function Giving() {
  return (
    <div className="container-default section">
      <h1 className="text-3xl font-bold">Giving</h1>
      <p className="mt-4 max-w-2xl">
        Thank you for supporting the ministry of St. John Church of God In Christ.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-sjBlue">Cash App</h3>
          <p className="mt-2"><strong>$StJohn750</strong></p>
        </div>
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-sjBlue">Zelle</h3>
          <p className="mt-2"><strong>stjohncogic750@gmail.com</strong></p>
        </div>
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-sjBlue">Givelify</h3>
          <p className="mt-2"><strong>Saint John Church of God In Christ</strong></p>
        </div>
      </div>

      <p className="mt-6 text-sm opacity-80">
        Domain note for the church: Cloudflare domain registration typically runs about $12–$15/year (separate from site design).
      </p>
    </div>
  );
}
