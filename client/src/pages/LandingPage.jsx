import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <h1 className="text-2xl font-bold text-cyan-400">
          LeadCRM
        </h1>

        <Link
          to="/login"
          className="bg-cyan-500 px-5 py-2 rounded-lg"
        >
          Login
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto text-center pt-32">
        <h1 className="text-6xl font-bold">
          Modern Lead
          <span className="text-cyan-400">
            {" "}Management CRM
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-300">
          Manage leads, track conversions,
          analyze performance and grow your business.
        </p>

        <Link
          to="/login"
          className="inline-block mt-10 bg-cyan-500 px-8 py-4 rounded-xl"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;