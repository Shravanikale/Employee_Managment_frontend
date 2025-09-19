

import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#18181b] via-[#23232a] to-[#18181b]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-[#23232a]/90 backdrop-blur-lg shadow-lg border-b border-[#23232a]">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" fill="#23232a" />
            <path d="M8 12h8M12 8v8" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-3xl font-extrabold text-[#ea580c] tracking-wide drop-shadow-lg">Employee Management</span>
        </div>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg text-[#e5e7eb] font-semibold hover:bg-[#18181b] transition-colors border border-[#3f3f46]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 rounded-lg text-[#e5e7eb] font-semibold hover:bg-[#18181b] transition-colors border border-[#3f3f46]"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-[#23232a]/90 rounded-3xl shadow-2xl p-12 max-w-3xl mt-16 mb-12 backdrop-blur-lg border border-[#3f3f46] flex flex-col items-center">
          <svg className="w-16 h-16 mb-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" fill="#23232a" />
            <path d="M8 12h8M12 8v8" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#ea580c] mb-6 drop-shadow-lg">
            Welcome to Employee Management
          </h1>
          <p className="text-xl md:text-2xl text-[#e5e7eb] mb-8 max-w-2xl">
            Effortlessly manage your organization's employees, track profiles, and streamline HR operations. Our platform offers a secure, user-friendly interface for both administrators and employees.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
            <Link
              to="/login"
              className="bg-[#ea580c] text-[#18181b] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#c2410c] transition-colors text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="bg-[#23232a] text-[#ea580c] font-bold px-8 py-4 rounded-xl shadow-lg border-2 border-[#ea580c] hover:bg-[#18181b] transition-colors text-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Welcome
