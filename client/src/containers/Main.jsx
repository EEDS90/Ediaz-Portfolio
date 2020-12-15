import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import image4 from "../../src/assets/profile.png";

function Main() {
  return (
    <>
      <div>
        <h1>Edwin Diaz</h1>
        <h3>Software Engineer</h3>
        <img className="project-imgs" src={image4} alt="profile png" />
      </div>
      <div className="purpose">
        <h1>Purpose</h1>
        <p>Developer looking to create something new</p>
      </div>
      <div className="tech-stack">
        <h1>Tech Stack</h1>
        <p>
          HTML5, CSS, JavaScript, React.js, Node.js, Ruby on Rails, SQL,
          PostgreSQL, MongoDB, NoSQL, GitHub, Bootstrap, Git.
        </p>
      </div>
    </>
  );
}
export default Main;
