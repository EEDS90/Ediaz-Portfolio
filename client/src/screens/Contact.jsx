import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <>
      <div>
        <h1>Contact Info</h1>
        <div>
          <form 
            className="contact1"
            action="https://formspree.io/f/xdopwjkq"
            method="post"
          >
            <div className="name1">
              <label> Name: </label>
              <input type="text" name="name" required />
            </div>
            <div className="email1">
              <label> Email:  </label>
              <input type="email" name="email" required />
            </div>
            <div className="message1">
              <label>Message:  </label>
              <textarea name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              <span>Send</span>
            </button>
          </form>
        </div>

        <div className="project-buttons">
          <a
            href=" https://www.linkedin.com/in/edwin-diaz-663b93194 "
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
      </div>
    </>
  );
}
