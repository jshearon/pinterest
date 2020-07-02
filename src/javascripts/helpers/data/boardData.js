import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUserBoards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="ownedBy"&equalTo="${userId}"`)
    .then((response) => {
      const boards = [];
      const boardData = response.data;
      Object.keys(boardData).forEach((boardId) => {
        boardData[boardId].id = boardId;
        boardData[boardId].previewPins = [];
        boards.push(boardData[boardId]);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boards = [];
      const boardData = response.data;
      Object.keys(boardData).forEach((boardId) => {
        boardData[boardId].id = boardId;
        boards.push(boardData[boardId]);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const getBoardById = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

export default { getUserBoards, getBoardById, getAllBoards };
