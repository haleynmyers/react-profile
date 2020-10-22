import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Project(props) {
    return (
      <div className="card" >
        <img 
        src={process.env.PUBLIC_URL + props.image} 
        alt={props.title}
        className="card-img-top"  />
        <h5 className="card-title">{props.title}</h5>
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <a href={props.repo}
            target="_blank"
            rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faGithubSquare}/>
            GitHub Repo
          </a>
          <a href={props.link}
            target="_blank"
            rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkSquareAlt}/>
            Website</a>
        </div>
      </div>
    );
};

export default Project;