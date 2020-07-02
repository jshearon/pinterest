import firebase from 'firebase/app';
import boardData from './boardData';
// import pinsData from './pinsData';
import utils from '../utils';
import pinsData from './pinsData';
import board from '../../components/board/board';

const getBoardsWithImages = () => new Promise((resolve, reject) => {
  boardData.getUserBoards(firebase.auth().currentUser.uid)
    .then((results) => {
      pinsData.getAllPins()
        .then((pins) => {
          pins.forEach((pin) => {
            results.find((result) => result.id === pin.boardId).previewPins.push(pin.image);
          });
          return results;
        })
        .catch((err) => console.error(err));
      return results;
    })
    .then((results) => {
      let domString = '';
      results.forEach((result) => {
        domString += board.makeBoard(result);
      });
      utils.printToDom('#content', domString);
    })
    .catch((err) => reject(err));
});

export default { getBoardsWithImages };
