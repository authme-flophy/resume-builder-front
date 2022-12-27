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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/register" index element={<SignUp />} />
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
