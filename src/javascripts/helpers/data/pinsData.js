import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const pins = [];
      const pinData = response.data;
      Object.keys(pinData).forEach((pinId) => {
        pinData[pinId].id = pinId;
        pins.push(pinData[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getAllPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const pins = [];
      const pinData = response.data;
      Object.keys(pinData).forEach((pinId) => {
        pinData[pinId].id = pinId;
        pins.push(pinData[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const addPin = (pinObj) => axios.post(`${baseUrl}/pins.json`, pinObj);

const updatePin = (pinId, editedPin) => axios.put(`${baseUrl}/pins/${pinId}.json`, editedPin);

export default {
  getPins,
  getAllPins,
  deletePin,
  addPin,
  updatePin,
};
