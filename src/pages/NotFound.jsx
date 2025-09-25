import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container-default py-24 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2">Page not found.</p>
      <Link to="/" className="mt-6 inline-block px-4 py-2 rounded bg-sjBlue text-white">
        Go Home
      </Link>
    </div>
  );
}
