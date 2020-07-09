import pinsData from '../../helpers/data/pinsData';
import singleBoard from '../singleBoard/singleBoard';

const addNewPin = (e) => {
  e.preventDefault();
  const newPin = {
    title: e.target.elements.title.value,
    url: e.target.elements.url.value,
    image: e.target.elements.image.value,
    boardId: e.target.closest('div[id]').id,
  };
  pinsData.addPin(newPin)
    .then(() => {
      document.querySelector('#add-pin').reset();
      singleBoard.makeSingleBoard(e);
    })
    .catch((err) => console.error('could not add pin', err));
};

export default { addNewPin };
