import React, { Component } from "react";

function Project(props) {

    return (
        <div className="card" style="width: 18rem;">
        <img src={props.img} className="card-img-top" alt={props.title} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
        <Link to={props.repo} activeClassName="active">GitHub Repo</Link>
        <p> || </p>
        <Link to={props.link} activeClassName="active">Website</Link>
        </div>
    </div>
    );
}

export default Project;