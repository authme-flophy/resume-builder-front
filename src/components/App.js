import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import "./App.css";
import ResumeForm from "./ResumeForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-resume" element={<ResumeForm />} />
      </Routes>
    </div>
  );
}

export default App;
