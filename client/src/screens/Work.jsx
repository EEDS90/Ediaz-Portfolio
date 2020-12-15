import React from "react";
import "./Work.css";
import image1 from "../../src/assets/project1.png";
import image2 from "../../src/assets/project2.png";
import image3 from "../../src/assets/project3.png";

export default function Work(props) {
  return (
    <>
      <div className="project1">
        <h2 className="projects-name">Roten Potatoes</h2>
        <img className="project-imgs" src={image1} alt="project png" />
        <div className="card-content">
          {/* <h2 className="projects-name">Roten Potatoes</h2> */}
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
              <button className="ls-buttons">Rotten Potatoes</button>
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

      <div className="project2">
        <h2 className="projects-name">Nurse Line</h2>
        <img className="project-imgs" src={image2} alt="project2 png" />
        <div className="card-content">
          <p className="projects-description">
            Nurse-Line Worked with a team of UX Designers and Software Engineers
            to create full-stack web applications for clients. Nurse-Line allows
            registered nurses to use the platform to communicate, vent and just
            anonymously post comments about their different experiences in the
            field. It was created using REACT.js.Rotten Potatoes This user
            friendly React app allows users to access New Releases with a cool
            hover over overview feature and allows the user to create their own
            reviews. It was created using conditional rendering with mock API
            data.{" "}
          </p>
          <div className="project-buttons">
            <a
              href=" https://nurseline.netlify.app "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ls-buttons">Nurse Line</button>
            </a>
            <a
              href="https://github.com/MakerMacAttack/nurse-line"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="gh-buttons">GitHub</button>
            </a>
          </div>
        </div>
      </div>

      <div className="project3">
        <h2 className="projects-name">iAlchemy</h2>
        <img className="project-imgs" src={image3} alt="project3 png" />
        <div className="card-content">
          <p className="projects-description">
            iAlchemy, is a full stack front and and backend website that offers
            advice on best business practices, inspiration from major
            personalities in business and entertainment, and motivation to
            improve your mind and body so that as a user you are in the best
            possible mental and physical shape to compete and reach your goals.
            It allows the user to have their friends and family anonymously
            answer the question, What do you really think about me? And how can
            I improve? It was created using REACT.js, PSQL and Ruby on Rails..{" "}
          </p>
          <div className="project-buttons">
            <a
              href=" https://ialchemy.netlify.app "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ls-buttons">iAlchemy</button>
            </a>
            <a
              href="https://github.com/EEDS90/Personal-Development"
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
