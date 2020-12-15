import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <>
      <div>
        <h1>Contact Info</h1>
        <form className="contactme-form" action="https://formspree.io/f/xdopwjkq" method="post">
          <div>
            <label> Name:</label>
            <input type="text" name="name" required/>
          </div>
          <div>
            <label> Email:</label>
            <input type="email" name="email" required/>
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button"><span>Send</span></button>
        </form>

        <div className="project-buttons">
          <a
            href=" https://www.linkedin.com/in/edwin-diaz-663b93194/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ls-buttons">LinkedIn</button>
          </a>
          <a
            href="https://github.com/EEDS90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="gh-buttons">GitHub</button>
          </a>
          <a
            href="ee.diaz.susana1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="gh-buttons">Email</button>
          </a>
        </div>
      </div>
    </>
  );
}
