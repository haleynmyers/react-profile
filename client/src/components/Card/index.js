import React from "react";
import "./style.css";

function Card(props) {
    return (
      <div className="card" >
        <h3 className="card-header"> { props.title } </h3>
        <div className="card-body">
          {props.children}
        </div>
      </div>
    );
}

export default Card;