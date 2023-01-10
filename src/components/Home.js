import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../media/landing.svg";
import Feed from "./Feed";
import "./Home.scss";

function Home({ user, setUser, axiosInstance }) {
  console.log(user);
  if (user) {
    return <Feed user={user} setUser={setUser} axiosInstance={axiosInstance} />;
  }

  return (
    <div className="container-sm justify-content-center">
      <div className="row">
        <div className="col-sm-6 text-section">
          <h1 className=" call-text">Get the right job you deserve</h1>
          <Link
            to="/create-resume"
            className="btn btn-outline-danger custom"
            id="create_resume"
          >
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
