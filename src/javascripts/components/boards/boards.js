import firebase from 'firebase/app';

import utils from '../../helpers/utils';
// import boardData from '../../helpers/data/boardData';
import board from '../board/board';
import smash from '../../helpers/data/smash';
import './boards.scss';

const deleteBoardAndPins = (e) => {
  smash.deleteBoard(e)
  // eslint-disable-next-line no-use-before-define
    .then(() => { printUserBoards(); });
};

const printUserBoards = () => {
  smash.getUserBoardsWithPins()
    .then((allBoards) => {
      const name = firebase.auth().currentUser.displayName;
      const firstName = name.split(' ', 1);
      let domString = `<h1 class="m-5">${firstName}'s Boards</h1>
        <div class="d-flex justify-content-around flex-wrap">`;
      allBoards.forEach((singleBoard) => {
        domString += board.makeBoard(singleBoard);
      });
      domString += '</div>';
      utils.printToDom('#content', domString);
      $('.trashBoard').on('click', deleteBoardAndPins);
    })
    .catch((err) => console.error('There was a problem loading the boards', err));
};

export default { printUserBoards };
