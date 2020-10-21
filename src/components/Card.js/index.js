import React, from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGitHub } from '@fortawesome/free-solid-svg-icons'

function Card() {

    return (
    <div className="card" style="width: 18rem;">
        <div className="card-body">
            <h5 className="card-title">Contact Me</h5>
            <p className="card-text"></p>
        <Link to= activeClassName="active">
        <FontAwesomeIcon icon={faGitHub}/>
        GitHub: haleynmyers</Link>
        <Link to="mailto:haleynmyers@gmail.com" activeClassName="active">
        <FontAwesomeIcon icon={faEnvelope} />
        Email: haleynmyers@gmail.com</Link>
        </div>
    </div>
    );
}

export default Card;