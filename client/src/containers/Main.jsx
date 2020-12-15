import React from "react";
import "./Main.css";
import image4 from "../../src/assets/profile.png";

function Main() {
  return (
    <>
      <div>
        <h1 className="name">Edwin Diaz</h1>
        <h3>Software Engineer</h3>
        <img className="profile-img" src={image4} alt="profile png" />
      </div>
      <div className="purpose">
        <h1>Purpose</h1>
        <hr />
        <p> Technology professional proficient in finding solutions that drive
            organizational processes and exceed customer expectations. Adaptable
            to the ever-changing IT landscape and focused on providing solutions
            that meet the needs of my team, the organization and the customer.
            Bilingual professional with fluency in Spanish/English with strong
            problem solving and analytical skills.</p>
      </div>
      <div className="tech-stack">
        <h1>Tech Stack</h1>
        <hr />
        <p>
          HTML5, CSS, JavaScript, React.js, Node.js, Ruby on Rails, SQL,
          PostgreSQL, MongoDB, NoSQL, GitHub, Bootstrap, Git.
        </p>
      </div>
    </>
  );
}
export default Main;
