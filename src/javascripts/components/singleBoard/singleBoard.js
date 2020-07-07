import pinsData from '../../helpers/data/pinsData';
// import board from '../board/board';
import pinData from '../pins/pins';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import './singleBoard.scss';

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
        <div class="pin-columns">`;
      pinsData.getPins(boardId)
        .then((pins) => {
          pins.forEach((pin) => {
            domString += pinData.makePins(pin);
          });
          domString += '</div>';
          utils.printToDom('#content', domString);
          $('.trashPin').on('click', deletePin);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

export default { makeSingleBoard };
