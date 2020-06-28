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
        boards.push(boardData[boardId]);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const getBoardById = (boardId) => axios.get(`${baseUrl}/board/${boardId}.json`);

export default { getUserBoards, getBoardById };
