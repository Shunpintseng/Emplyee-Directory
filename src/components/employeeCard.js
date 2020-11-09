import React from "react";

function employeeCard(props) {
  return (
    <div className="card text-center">
      <div className="image">
        <img src={props.picture} alt = {(props.firstName, props.lastName)}/> 
      </div>

      <div className="profile">
        <p>{props.firstName} {props.lastName}</p>
      </div>
    </div>
  );
}

export default employeeCard;
