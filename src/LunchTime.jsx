import React from "react";
import { getAllLunchSpots } from "./lunchService.js";
import LunchSpot from "./LunchSpot.jsx";
import LunchForm from "./LunchForm";

import "./lunchSpot.css";

class LunchTime extends React.Component {
  state = {
    lunchSpots: [],
    showSpot: false,
    randomSpot: {},
    showForm: false
  };

  componentDidMount() {
    getAllLunchSpots().then(this.getAllLunchSpotsSuccess);
  }

  getAllLunchSpotsSuccess = response => {
    let lunchSpots = response.items;
    let randomIndex = Math.floor(Math.random() * lunchSpots.length);
    let randomSpot = lunchSpots.splice(randomIndex, 1)[0];
    this.setState({ lunchSpots, randomSpot });
  };

  //   getRandomLunch = allLunchSpots => {
  //     let randomIndex = Math.floor(Math.random() * allLunchSpots.length);
  //     let randomSpot = allLunchSpots[randomIndex];
  //     return randomSpot;
  //   };

  randomLunchClickHandler = evt => {
    console.log(evt.target.name);
    let showSpot =
      evt.target.name === "firstRandom"
        ? !this.state.showSpot
        : this.state.showSpot;

    let lunchSpots = this.state.lunchSpots;
    let randomIndex = Math.floor(Math.random() * lunchSpots.length);
    let randomSpot = lunchSpots.splice(randomIndex, 1)[0];
    lunchSpots.push(this.state.randomSpot);
    this.setState({ showSpot, randomSpot });
  };

  createLunchClickHandler = evt => {
    let showForm = !this.state.showForm;
    this.setState({ showForm });
  };

  sendUpdatedSpots = updatedSpots => {
    let lunchSpots = updatedSpots.items;
    this.setState({ lunchSpots });
  };

  render() {
    return (
      <div>
        {this.state.showSpot ? (
          <div>
            <LunchSpot restaurant={this.state.randomSpot} />
            <button
              className="simpleButton"
              name="another"
              onClick={this.randomLunchClickHandler}
            >
              give me another!
            </button>
          </div>
        ) : (
          <div>
            <button
              className="simpleButton"
              name="firstRandom"
              onClick={this.randomLunchClickHandler}
            >
              Get a random lunch spot
            </button>
          </div>
        )}

        <div>
          <button
            className="simpleButton"
            name="createSpot"
            onClick={this.createLunchClickHandler}
          >
            {this.state.showForm ? `nvm` : `Add a lunch spot`}
          </button>
        </div>
        {this.state.showForm && (
          <LunchForm sendUpdatedSpots={this.sendUpdatedSpots} />
        )}
      </div>
    );
  }
}

export default LunchTime;
