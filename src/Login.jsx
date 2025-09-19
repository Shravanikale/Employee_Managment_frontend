import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credientials, setCredientials] = useState({
    email: "",
    password: "",
  });

  const nevigate=useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredientials((old) => ({ ...old, [name]: value }));
  };

  const login = async (e) => {
    e.preventDefault();

    // api call

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: credientials.email,
        password: credientials.password,
      });
      console.log(response.data);

      if (response.data.id>0) {
       nevigate("/dashboard")
      } else {
        alert("Invlaid Credientials");
         nevigate("/login")
      }
    } catch (error) {
      console.error(error);
      alert("failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#18181b] py-12 px-4">
        <div className="w-full max-w-md bg-[#23232a] rounded-xl shadow-lg p-8 backdrop-blur-md border border-[#3f3f46]">
          <h2 className="text-3xl font-bold text-center text-[#38bdf8] mb-6">
            Login
          </h2>
          <form onSubmit={login}>
            <div className="mb-4">
              <label className="block text-[#e5e7eb] font-semibold mb-2">
                Email
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={credientials.email}
                onChange={inputHandler}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#e5e7eb] font-semibold mb-2">
                Password
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={credientials.password}
                onChange={inputHandler}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ea580c] text-[#18181b] font-bold py-2 rounded-lg shadow hover:bg-[#c2410c] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
