import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <>
      <div>
        <div className="about1">
          <h1>About Me</h1>
        </div>
        <div className="about2">
        <p>
            Technology professional proficient in finding solutions that drive
            organizational processes and exceed customer expectations. Adaptable
            to the ever-changing IT landscape and focused on providing solutions
            that meet the needs of my team, the organization and the customer.
            Bilingual professional with fluency in Spanish/English with strong
            problem solving and analytical skills.
        </p>
        </div>

        <div className="project-buttons">
            <a
              href=" https://1drv.ms/w/s!AmKeOpQ51dd4a4Roe0k5FYCH5WQ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ls-buttons">Resume</button>
            </a>
            
          </div>
      </div>
    </>
  );
}
