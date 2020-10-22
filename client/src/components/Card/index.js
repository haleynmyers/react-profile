import React from "react";


function Card(props) {
    return (
      <div className="card" style="width: 18rem;">
        <h5 className="card-title"> { props.title } </h5>
        <div className="card-body">
          {props.children}
        </div>
      </div>
    );
}

export default Card;