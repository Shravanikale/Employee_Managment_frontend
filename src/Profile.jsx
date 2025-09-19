import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  const nevigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setUser((old) => ({ ...old, [name]: value }));
  };

  const getUserById = async () => {
    const api_url = `http://localhost:8080/getById?id=${id}`;
    const res = await axios.get(api_url);
    setUser(res.data);
  };

  const updateUser = async (e) => {
    e.preventDefault();

    // http://localhost:8080/update

    await axios.put("http://localhost:8080/update", {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
    alert("User Profile Updated !!");
    nevigate("/users");
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18181b] py-12 px-4">
      <div className="w-full max-w-md bg-[#23232a] rounded-xl shadow-lg p-8 backdrop-blur-md border border-[#3f3f46]">
  <h2 className="text-3xl font-bold text-center text-[#38bdf8] mb-6">
          Update Profile
        </h2>
        <form onSubmit={updateUser}>
          <div className="mb-4">
            <label
              className="block text-[#e5e7eb] font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              type="number"
              id="id"
              name="id"
              value={user.id}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#e5e7eb] font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#e5e7eb] font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#3f3f46] bg-[#27272a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={inputHandler}
            />
          </div>
            <button
              type="submit"
              className="w-full bg-[#38bdf8] text-[#18181b] font-bold py-2 rounded-lg shadow hover:bg-[#0ea5e9] transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
