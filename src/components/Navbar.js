import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";
import "./Navbar.scss";

function Navbar({ user, setUser }) {
  const [navCollapsed, setNavCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setNavCollapsed(!navCollapsed);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid container-md">
        <a className="navbar-brand" href="#">
          <span id="resume-text">Resume</span>
          <span id="builder-text">.builder</span>
        </a>
        <button
          className="navbar-toggler"
          id="toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded={!navCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={(e) => setNavCollapsed(!navCollapsed)}
        >
          <i className="material-icons">dehaze</i>
        </button>
        <div
          className={`${!navCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                id="home"
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={(e) => setNavCollapsed(!navCollapsed)}
              >
               Home
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {user ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/create-resume"
                    id="create-resume"
                    className="nav-link"
                    aria-current="page"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => setNavCollapsed(!navCollapsed)}
                  >
                    Create Resume
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    id="logout"
                    className="nav-link"
                    aria-current="page"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleLogout()}
                  >
                    Logout
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    to={`${user.username}`}
                    id="profile"
                    className="nav-link"
                    aria-current="page"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => setNavCollapsed(!navCollapsed)}
                  >
                    <img
                      id="nav-image"
                      src={user.image_url}
                      alt="profile picture"
                    />
                    {user.username}
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    id="login"
                    className="nav-link"
                    aria-current="page"
                    to="/login"
                    onClick={(e) => setNavCollapsed(!navCollapsed)}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    id="signup"
                    className="nav-link"
                    aria-current="page"
                    to="/register"
                    onClick={(e) => setNavCollapsed(!navCollapsed)}
                  >
                    SignUp
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
