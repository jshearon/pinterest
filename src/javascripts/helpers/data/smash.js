import firebase from 'firebase/app';
import boardData from './boardData';
import pinsData from './pinsData';

const getUserBoardsWithPins = () => new Promise((resolve, reject) => {
  boardData.getUserBoards(firebase.auth().currentUser.uid)
    .then((boards) => {
      pinsData.getAllPins()
        .then((pins) => {
          const boardsWithPins = [];
          boards.forEach((eachBoard) => {
            const boardPins = pins.filter((p) => p.boardId === eachBoard.id);
            const filteredPins = [];
            boardPins.forEach((boardPin) => {
              filteredPins.push(boardPin.image);
            });
            boardsWithPins.push({ id: eachBoard.id, name: eachBoard.name, previewPins: filteredPins });
          });
          resolve(boardsWithPins);
        });
    })
    .catch((err) => reject(err));
});

export default { getUserBoardsWithPins };
