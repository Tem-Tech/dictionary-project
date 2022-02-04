import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <div>
      <div className="navbar">
        <nav className="navbar">
          <a href="./">
            <h1>
              <span className="dev">📒Dev</span>
              <span className="cheq">Cheq</span>
            </h1>{" "}
          </a>
          <span>
            <ul>
              <li className="nav-item">
                <a href="#about" className="nav-link" id="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" id="nav-link">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" id="nav-link">
                  Hire
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" id="nav-link">
                  My Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" id="nav-link">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link login" id="nav-link">
                  Login
                </a>
              </li>
            </ul>
          </span>
          <div class="theme-switch">
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label for="checkbox" className="label">
              <FontAwesomeIcon icon="coffee" aria-hidden="true" />

              <i className="fas fa-lightbulb" aria-hidden="true"></i>
              <div className="switcher"></div>
            </label>
          </div>
          <div className="hamburger" id="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </div>
  );
}
