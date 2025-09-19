import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      // Assuming your backend returns the created user object with an id
      if (response.data.id > 0) {
        alert("Registered successfully!");
        navigate("/dashboard"); // Redirect to dashboard page after registration
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please check the console for errors.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18181b] py-12 px-4">
      <div className="w-full max-w-md bg-[#23232a] rounded-xl shadow-lg p-8 backdrop-blur-md border border-[#3f3f46]">
        <h2 className="text-3xl font-bold text-center text-[#ea580c] mb-6">
          Register
        </h2>
        <form onSubmit={register}>
          <div className="mb-4">
            <label className="block text-[#e5e7eb] font-semibold mb-2">
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={inputHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#e5e7eb] font-semibold mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={inputHandler}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#e5e7eb] font-semibold mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={inputHandler}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ea580c] text-[#18181b] font-bold py-2 rounded-lg shadow hover:bg-[#c2410c] transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;