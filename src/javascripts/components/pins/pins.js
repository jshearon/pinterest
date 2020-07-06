import './pins.scss';

const makePins = (pin) => `
  <div class="card mx-auto pins" draggable="true">
    <div class="card-body d-flex flex-column h-100">
      <img class="w-100" src="${pin.image}">
      <div class="text-right mt-auto trashPin" id="${pin.boardId}" data-pin-id="${pin.id}"><i class="fas fa-trash"></i></div>
      <h5 class="card-title mt-auto">${pin.title}</h5>
    </div>
  </div>`;

export default { makePins };
