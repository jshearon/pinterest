import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import board from '../board/board';

const printUserBoards = () => {
  boardData.getUserBoards(firebase.auth().currentUser.uid)
    .then((allBoards) => {
      const name = firebase.auth().currentUser.displayName;
      const firstName = name.split(' ', 1);
      let domString = `<h1 class="m-5">${firstName}'s Boards</h1>
        <div class="d-flex justify-center">`;
      allBoards.forEach((singleBoard) => {
        domString += board.makeBoard(singleBoard);
      });
      domString += '</div>';
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('There was a problem loading the boards', err));
};

export default { printUserBoards };
