import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);

  const nevigate = useNavigate();

  const getAllUser = async () => {
    const APIURl = "http://localhost:8080/getAll";
    const response = await axios.get(APIURl);
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = async (id) => {
    const api_url = `http://localhost:8080/delete?id=${id}`;
    await axios.delete(api_url);

    const updated = users.filter((user) => user.id !== id);
    setUsers(updated);
  };

  const showUser = (id) => {
    // pass this id throw url whis is mapped in Routes
    nevigate(`/profile/${id}`);

  };

  return (
    <>
  <div className="min-h-screen flex flex-col bg-[#18181b]">
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

        <div className="flex-1 flex flex-col items-center py-2 px-2">
          <div className="w-full max-w-4xl bg-[#23232a] rounded-xl shadow-lg p-6 mt-2 border border-[#3f3f46]">
            <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">All Users</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#3f3f46]">
                <thead className="bg-[#23232a]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#e5e7eb] uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#e5e7eb] uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#e5e7eb] uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Password
                    </th>
                    <th className="px-6 py-3 text-left font-extrabold text-xs text-[#e5e7eb] uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3f3f46]">
                  {users.map((user, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-[#23232a]" : "bg-[#18181b]"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e5e7eb]">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e5e7eb]">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e5e7eb]">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e5e7eb]">
                        {user.password}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex justify-between spa text-sm text-[#e5e7eb]">
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="border-2 rounded p-2 bg-[#f472b6] text-[#18181b]"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => showUser(user.id)}
                          className="border-2 rounded p-2 bg-[#4ade80] text-[#18181b]"
                        >
                          Show
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
