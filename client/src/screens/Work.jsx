import React from "react";
import "./Work.css";
import image1 from "../../src/assets/project1.png";

export default function Work(props) {
  return (
    <>
      <div className="project1">
        <img className="project-imgs" src={image1} alt="project png" />
        <div className="card-content">
          <h2 className="projects-name">Roten Potatoes</h2>
          <p className="projects-description">
            Rotten Potatoes This user friendly React app allows users to access
            New Releases with a cool hover over overview feature and allows the
            user to create their own reviews. It was created using conditional
            rendering with mock API data.{" "}
          </p>
          <div className="project-buttons">
            <a
              href=" https://rotten-potatoes.netlify.app "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ls-buttons">Visit Site</button>
            </a>
            <a
              href="https://github.com/EEDS90/Movie-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="gh-buttons">GitHub</button>
            </a>


            
          </div>
        </div>
      </div>
    </>
  );
}
