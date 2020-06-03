import axios from "axios";

const urlPrefix = "https://9638f0c7-f915-44a9-9bc3-f0f24b996f8c.mock.pstmn.io";

let getAllLunchSpots = payload => {
  const config = {
    method: "GET",
    url: urlPrefix + "/v1/suggestions",
    crossdomain: true,
    headers: {
      "Content-type": "application/json"
    }
  };
  return axios(config)
    .then(response => response.data)
    .catch(response => console.log(response));
};

let createLunchSpot = payload => {
  const config = {
    method: "POST",
    data: payload,
    url: urlPrefix + "/v1/suggestions",
    crossdomain: true,
    headers: {
      "Content-type": "application/json"
    }
  };
  return axios(config)
    .then(response => response.data)
    .catch(response => console.log(response));
};

export { getAllLunchSpots, createLunchSpot };
