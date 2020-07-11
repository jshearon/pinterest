import firebase from 'firebase/app';
import pinsData from '../../helpers/data/pinsData';
import pinData from '../pins/pins';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import './singleBoard.scss';
// eslint-disable-next-line import/no-cycle
import newPin from '../newPin/newPin';

const deletePin = (e) => {
  // eslint-disable-next-line prefer-destructuring
  const pinId = e.target.closest('.card').dataset.pinId;
  console.error(pinId);
  pinsData.deletePin(pinId)
    // eslint-disable-next-line no-use-before-define
    .then(makeSingleBoard(e))
    .catch((err) => console.error(err));
};

const makeSingleBoard = (e) => {
  const boardId = e.target.closest('div[id]').id;
  boardData.getBoardById(boardId)
    .then((response) => {
      const boardName = response.data.name;
      let domString = `
        <button class="btn btn-secondary" id="view-all-boards"><i class="fas fa-grip-horizontal"></i> View All Boards</button>
        <h1 class="text-center">${boardName}</h1>
        <div class="d-flex justify-content-between w-100" id="${boardId}">
          <span class="dropdown mx-auto">
          <i class="fas fa-plus" data-toggle="dropdown"></i>
          <form class="dropdown-menu dropdown-menu-center p-4" id="add-pin">
          <div class="form-group">
            <label for="new-board-name">Pin Name</label>
            <input type="text" class="form-control" name="title">
          </div>
          <div class="form-group">
            <label for="new-board-name">URL</label>
            <input type="text" class="form-control" name="url">
          </div>
          <div class="form-group">
            <label for="new-board-name">Image URL</label>
            <input type="text" class="form-control" name="image">
          </div>
          <button type="submit" class="btn btn-primary m-0">Add New Pin</button>
        </form>
          </span>
        </div>
        <div class="pin-columns">`;
      pinsData.getPins(boardId)
        .then((pins) => {
          boardData.getUserBoards(firebase.auth().currentUser.uid)
            .then((userBoards) => {
              pins.forEach((pin) => {
                domString += pinData.makePins(pin, userBoards);
              });
              domString += '</div>';
              utils.printToDom('#content', domString);
              document.querySelector('#add-pin').addEventListener('submit', newPin.addNewPin);
              $('.trashPin').on('click', deletePin);
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

export default { makeSingleBoard };
