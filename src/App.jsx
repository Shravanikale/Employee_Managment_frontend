import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import Users from "./Users";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/users" element={<Users />}></Route>

        <Route path="/profile/:id" element={<Profile />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
