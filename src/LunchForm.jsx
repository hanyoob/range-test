import React from "react";
import { createLunchSpot } from "./lunchService.js";

class LunchForm extends React.Component {
  state = { formData: {}, successfulPost: false };

  submitHandler = () => {
    createLunchSpot(this.state.formData).then(this.onCreateSuccessHandler);
  };

  backClickHandler = () => {
    let successfulPost = false;
    this.setState({ successfulPost });
  };

  onCreateSuccessHandler = response => {
    let successfulPost = true;
    this.setState({ successfulPost });
    this.props.sendUpdatedSpots(response);
  };

  inputChangeHandler = evt => {
    let formData = this.state.formData;
    let inputName = evt.target.name;
    formData[inputName] = evt.target.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="card">
        {this.state.successfulPost ? (
          <>
            <div className="container">
              <p>nice!</p>
            </div>{" "}
            <button
              className="simpleButton"
              onClick={this.backClickHandler}
              style={{ margin: "5px" }}
            >
              back
            </button>
          </>
        ) : (
          <>
            <div className="container">
              <ul>
                <form>
                  <label htmlFor="name">Name: </label>
                  <input
                    onChange={this.inputChangeHandler}
                    type="text"
                    id="name"
                    name="name"
                  />
                  <br />
                  <label htmlFor="address">Address: </label>
                  <input
                    onChange={this.inputChangeHandler}
                    type="text"
                    id="address"
                    name="address"
                  />
                  <br />
                  <label htmlFor="url">Homepage: </label>
                  <input
                    onChange={this.inputChangeHandler}
                    type="text"
                    id="url"
                    name="url"
                  />
                  <br />
                  <label htmlFor="moreInfo">Description: </label>
                  <input
                    onChange={this.inputChangeHandler}
                    type="text"
                    id="moreInfo"
                    name="moreInfo"
                  />
                  <br />
                </form>
              </ul>
            </div>
            <button
              className="simpleButton"
              onClick={this.submitHandler}
              style={{ margin: "5px" }}
            >
              Submit!
            </button>
          </>
        )}
      </div>
    );
  }
}

export default LunchForm;
