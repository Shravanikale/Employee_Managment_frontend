import { Link } from "react-router-dom";

function Dashboard() {
  return (
  <div className="min-h-screen flex flex-col bg-[#18181b]">
      {/* Navbar */}
  <nav className="flex items-center justify-between px-6 py-4 bg-[#23232a]/80 backdrop-blur-md shadow-md border-b border-[#23232a]">
  <div className="text-2xl font-bold text-[#38bdf8] tracking-wide drop-shadow-lg">
          Employee Management
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/users"
            className="text-[#e5e7eb] font-medium hover:bg-[#23232a] px-4 py-2 rounded-md transition-colors border border-[#3f3f46]"
          >
            All Users
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="text-[#e5e7eb] font-medium hover:bg-[#23232a] px-4 py-2 rounded-md transition-colors border border-[#3f3f46]"
          >
            Logout
          </Link>
        </div>
      </nav>

      {/* Main Section */}
  <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
  <h1 className="text-3xl md:text-4xl font-extrabold text-[#38bdf8] mb-8 drop-shadow-lg">
          User Functionalities
        </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          {/* Login Card */}
          <div className="bg-[#23232a] rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-[#3f3f46]">
            <svg
              className="w-10 h-10 text-blue-600 mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m0 0l4-4m-4 4l4 4m13-4a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-bold mb-2 text-[#38bdf8]">Login</h2>
            <p className="text-[#e5e7eb] mb-4 text-center">
              Access your account securely and manage your profile.
            </p>
          </div>

          {/* Register Card */}
          <div className="bg-[#23232a] rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-[#3f3f46]">
            <svg
              className="w-10 h-10 text-purple-600 mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h2 className="text-xl font-bold mb-2 text-[#a78bfa]">Register</h2>
            <p className="text-[#e5e7eb] mb-4 text-center">
              Create a new account to join the Employee Management system.
            </p>
          </div>

          {/* Update Card */}
          <div className="bg-[#23232a] rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-[#3f3f46]">
            <svg
              className="w-10 h-10 text-green-600 mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-xl font-bold mb-2 text-[#4ade80]">Update</h2>
            <p className="text-[#e5e7eb] mb-4 text-center">
              Edit and update your personal or employee information.
            </p>
          </div>

          {/* Delete Card */}
          <div className="bg-[#23232a] rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-[#3f3f46]">
            <svg
              className="w-10 h-10 text-red-600 mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <h2 className="text-xl font-bold mb-2 text-[#f472b6]">Delete</h2>
            <p className="text-[#e5e7eb] mb-4 text-center">
              Remove your account or delete employee records as needed.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
