import React from "react";
import Card from "../components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faExternalLinkSquareAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    return(
<div className="row">
    <div className="col-md-6 centered">

    <Card title="Contact me">
      <h5 className="card-text">
          <ul>
              <li>
                <FontAwesomeIcon icon={faPhoneSquare} /> {"  "}Cell: 615-315-1593
              </li>
              <li>
                <a style={{color: "black"}} href="https://github.com/haleynmyers" activeClassName="active">
                <FontAwesomeIcon icon={faGithubSquare}/>{"  "}
                GitHub: haleynmyers</a>
              </li>
              <li>
                <a style={{color: "black"}} href="mailto:haleynmyers@gmail.com" activeClassName="active">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />{"  "}
                    Email: haleynmyers@gmail.com</a>
              </li>
              <li>
                <a style={{color: "black"}} href="https://www.linkedin.com/in/haley-myers-56a4a3b5/" activeClassName="active">
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />{"  "}
                LinkedIn: haleynmyers</a>
              </li>
          </ul>
      </h5>
    </Card>
    </div>
</div>
    )
};

export default Contact;