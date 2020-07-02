import pinsData from '../../helpers/data/pinsData';
// import board from '../board/board';
import pinData from '../pins/pins';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import './singleBoard.scss';

const makeSingleBoard = (e) => {
  const boardId = e.target.closest('div[id]').id;
  boardData.getBoardById(boardId)
    .then((response) => {
      const boardName = response.data.name;
      let domString = `
        <h1>${boardName}</h1>
        <div class="d-flex justify-center">`;
      pinsData.getPins(boardId)
        .then((pins) => {
          pins.forEach((pin) => {
            domString += pinData.makePins(pin);
          });
          domString += '</div>';
          utils.printToDom('#content', domString);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

export default { makeSingleBoard };
