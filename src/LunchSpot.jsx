import React from "react";

const LunchSpot = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="container">
          <ul>
            <li>Restaurant name: {props.restaurant.name}</li>
            <li>Address: {props.restaurant.address}</li>
            <li>
              Homepage: <a href={props.restaurant.url}>link</a>
            </li>

            <li>Description: {props.restaurant.moreInfo}</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LunchSpot;
