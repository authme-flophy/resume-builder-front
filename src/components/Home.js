import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/landing.svg";
import "./Home.scss";

function Home() {
  return (
    <div className="container-sm justify-content-center">
      <div className="row">
        <div className="col-sm-6 text-section">
          <h1 className=" call-text">Get the right job you deserve</h1>
          <Link to="/create-resume" className="btn btn-outline-danger custom">
            CREATE RESUME NOW
          </Link>
        </div>
        <div className="col-sm-6">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
