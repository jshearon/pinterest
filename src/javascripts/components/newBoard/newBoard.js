import firebase from 'firebase/app';
import boardData from '../../helpers/data/boardData';
// eslint-disable-next-line import/no-cycle
import boards from '../boards/boards';

const addNewBoard = (e) => {
  e.preventDefault();
  console.error(firebase.auth().currentUser.uid);
  const newBoard = {
    name: e.target.elements.board.value,
    ownedBy: firebase.auth().currentUser.uid,
  };
  boardData.addBoard(newBoard)
    .then(() => {
      document.querySelector('#add-board').reset();
      boards.printUserBoards();
    })
    .catch((err) => console.error('could not add Board', err));
};

export default { addNewBoard };
