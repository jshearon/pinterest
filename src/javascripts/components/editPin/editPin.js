import pinsData from '../../helpers/data/pinsData';
// eslint-disable-next-line import/no-cycle
import singleBoard from '../singleBoard/singleBoard';

const editPin = (e) => {
  e.preventDefault();
  const editedPin = {
    title: e.target.elements.title.value,
    url: e.target.elements.url.value,
    image: e.target.elements.image.value,
    boardId: e.target.elements.selectedBoard.value,
  };
  const pinId = e.target.elements.pinId.value;
  pinsData.updatePin(pinId, editedPin)
    .then(() => {
      document.querySelector(`#edit-pin-${pinId}`).reset();
      singleBoard.makeSingleBoard(e);
    })
    .catch((err) => console.error('could not add pin', err));
};

export default { editPin };
