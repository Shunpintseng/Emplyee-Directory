import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="picture">
        <img alt={props.FirstName} src={props.picture} />
      </div>

      <div className="details">
            <h4>First Name: {props.FirstName} </h4> 
            <h4>Last Name: {props.LastName} </h4> 

      </div>
    </div>
  );
}

export default EmployeeCard;
