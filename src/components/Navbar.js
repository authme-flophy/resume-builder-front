import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./Navbar.scss";

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
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
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="material-icons">dehaze</i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link id="home" className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {user ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    id="logout"
                    className="nav-link"
                    aria-current="page"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleLogout()}
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="profile"
                    className="nav-link"
                    aria-current="page"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleLogout()}
                  >
                    <img
                      id="nav-image"
                      src={user.image_url}
                      alt="profile picture"
                    />
                    {user.username}
                  </a>
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
