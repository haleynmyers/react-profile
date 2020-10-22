import React from "react";
import Card from "../components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faExternalLinkSquareAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    return(

    <Card title="Contact me">
      <p className="card-text">
        <FontAwesomeIcon icon={faPhoneSquare} />Cell: 615-315-1593
        <a href="https://github.com/haleynmyers" activeClassName="active">
            <FontAwesomeIcon icon={[fab, faGithubSquare]}/>
            GitHub: haleynmyers</a>
        <a href="mailto:haleynmyers@gmail.com" activeClassName="active">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            Email: haleynmyers@gmail.com</a>
        <a href="https://www.linkedin.com/in/haley-myers-56a4a3b5/" activeClassName="active">
            <FontAwesomeIcon icon={[fab, faExternalLinkSquareAlt]} />
            LinkedIn: haleynmyers</a>
      </p>
    </Card>
    )
};

export default Contact;