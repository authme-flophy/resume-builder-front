import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ResumeForm from "./components/ResumeForm";
import Position from "./components/Position";
import ProgrammingLanguage from "./components/ProgrammingLanguage";
import University from "./components/University";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/signup" index element={<SignUp />} />
        <Route path="/create-resume" index element={<ResumeForm />} />
        <Route path="/position" index element={<Position />} />
        <Route path="/languages" index element={<ProgrammingLanguage />} />
        <Route path="/education" index element={<University />} />
        <Route path="/position" index element={<Position />} />
      </Routes>
    </div>
  );
}

export default App;
