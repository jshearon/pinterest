import pinsData from '../../helpers/data/pinsData';
import singleBoard from '../singleBoard/singleBoard';

const editPin = (e) => {
  e.preventDefault();
  const editedPin = {
    title: e.target.elements.title.value,
    url: e.target.elements.url.value,
    image: e.target.elements.image.value,
    boardId: e.target.closest('div[id]').id,
  };
  const pinId = e.target.elements.pinId.value;
  pinsData.editPin(editedPin, pinId)
    .then(() => {
      document.querySelector(`#edit-pin-${pinId}`).reset();
      singleBoard.makeSingleBoard(e);
    })
    .catch((err) => console.error('could not add pin', err));
};

export default { editPin };
