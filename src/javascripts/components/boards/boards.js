import firebase from 'firebase/app';

import utils from '../../helpers/utils';
// import boardData from '../../helpers/data/boardData';
import board from '../board/board';
import smash from '../../helpers/data/smash';
import './boards.scss';
// eslint-disable-next-line import/no-cycle
import newBoard from '../newBoard/newBoard';

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
      let domString = `
        <h1 class="d-flex justify-content-between">
          <span>${firstName}'s Boards</span>
          <span class="dropdown">
          <i class="fas fa-plus" data-toggle="dropdown"></i>
          <form class="dropdown-menu dropdown-menu-right p-4" id="add-board">
          <div class="form-group">
            <label for="new-board-name">Board Name</label>
            <input type="text" class="form-control" name="board">
          </div>
          <button type="submit" class="btn btn-primary m-0">Add New Board</button>
        </form>
          </span>
        </h1>
        <div class="d-flex justify-content-around flex-wrap">`;
      allBoards.forEach((singleBoard) => {
        domString += board.makeBoard(singleBoard);
      });
      domString += '</div>';
      utils.printToDom('#content', domString);
      document.querySelector('#add-board').addEventListener('submit', newBoard.addNewBoard);
      $('.trashBoard').on('click', deleteBoardAndPins);
    })
    .catch((err) => console.error('There was a problem loading the boards', err));
};

export default { printUserBoards };
