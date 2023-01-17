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
import JobExperience from "./JobExperience";
import Profile from "./Profile";
import Feed from "./Feed";
import ProtectedRoutes from "../ProtectedRoutes";
import PdfTrial from "./PdfTrial";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: { Authorization: localStorage.getItem("token") },
  });

  useEffect(() => {
    axiosInstance
      .get("/me")
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // localStorage.setItem("token", JSON.stringify(res.data.token));
        setLoggedIn(true);
        localStorage.setItem("loggedIn", loggedIn);
        setUser(JSON.parse(localStorage.getItem("user")));
      })
      .catch((err) => {
        console.error(err.response.status);
        setLoggedIn(false);
        localStorage.setItem("loggedIn", loggedIn);
      });
  }, []);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/trial"
          index
          element={
            <PdfTrial
              user={user}
              setUser={setUser}
              axiosInstance={axiosInstance}
            />
          }
        />
        <Route
          path="/login"
          index
          element={
            <Login
              user={user}
              setUser={setUser}
              axiosInstance={axiosInstance}
            />
          }
        />
        <Route
          path="/register"
          index
          element={
            <SignUp
              user={user}
              setUser={setUser}
              axiosInstance={axiosInstance}
            />
          }
        />
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/create-resume"
            index
            element={<ResumeForm axiosInstance={axiosInstance} />}
          />
          <Route
            path="/experience"
            index
            element={<JobExperience axiosInstance={axiosInstance} />}
          />
          <Route
            path="/languages"
            index
            element={<ProgrammingLanguage axiosInstance={axiosInstance} />}
          />
          <Route
            path="/education"
            index
            element={<University axiosInstance={axiosInstance} />}
          />
          <Route
            path="/position"
            index
            element={<Position axiosInstance={axiosInstance} />}
          />
          <Route
            path="/profile"
            index
            element={<Profile axiosInstance={axiosInstance} />}
          />
          <Route
            path="/feed"
            element={<Feed axiosInstance={axiosInstance} />}
          />
          <Route
            path=":profile"
            element={<Profile axiosInstance={axiosInstance} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
