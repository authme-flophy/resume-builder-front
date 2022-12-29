import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import ResumeForm from "./ResumeForm";
import Position from "./Position";
import ProgrammingLanguage from "./ProgrammingLanguage";
import University from "./University";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: { Authorization: localStorage.getItem("token") },
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axiosInstance
        .get("/me")
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/login"
          index
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          index
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route
          path="/create-resume"
          index
          element={<ResumeForm user={user} setUser={setUser} />}
        />
        <Route
          path="/position"
          index
          element={<Position user={user} setUser={setUser} />}
        />
        <Route
          path="/languages"
          index
          element={<ProgrammingLanguage user={user} setUser={setUser} />}
        />
        <Route
          path="/education"
          index
          element={<University user={user} setUser={setUser} />}
        />
        <Route
          path="/position"
          index
          element={<Position user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
