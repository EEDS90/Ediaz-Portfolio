import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export default function Header() {
  return (
    <div className="main-header">
      <div className="header">
        <div className="main-links">
          <ul className="header-item">
            <li className="home">
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li className="about">
              <Link to="/about">
                <p>About Me</p>
              </Link>
            </li>
            <li className="work">
              <Link to="/work">
                <p>Work</p>
              </Link>
            </li>
            <li className="contact">
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* <hr /> */}
      </div>
      
    </div>
  );
}
