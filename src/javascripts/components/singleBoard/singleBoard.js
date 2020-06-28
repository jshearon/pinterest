import pinsData from '../../helpers/data/pinsData';
// import board from '../board/board';
import pinData from '../pins/pins';
import utils from '../../helpers/utils';

const makeSingleBoard = (e) => {
  const boardId = e.target.closest('div[id]').id;
  pinsData.getPins(boardId)
    .then((pins) => {
      let domString = '';
      pins.forEach((pin) => {
        domString += pinData.makePins(pin);
      });
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error(err));
};

export default { makeSingleBoard };
