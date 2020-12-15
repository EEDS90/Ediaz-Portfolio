import React from 'react'
import './Contact.css';

export default function Contact(props) {
    return(
        <>
            <div>
                <h1>Contact Info</h1>
                <p>Email: ee.diaz.susana1@gmail.com </p>
                
          <div className="project-buttons">
            <a
              href=" https://www.linkedin.com/in/edwin-diaz-663b93194/"
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
          </div>
            </div>
        </>
    )
}