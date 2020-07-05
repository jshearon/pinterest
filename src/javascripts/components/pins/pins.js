import './pins.scss';

const makePins = (pin) => `
  <div class="card mx-auto mt-5 pins" draggable="true">
    <div class="card-body d-flex flex-column h-100">
      <h5 class="card-title mt-auto">${pin.title}</h5>
      <p class="card-text mt-auto"><img class="w-100" src="${pin.image}"></p>
      <div class="w-100 text-right mt-auto trashPin" id="${pin.boardId}" data-pin-id="${pin.id}"><i class="fas fa-trash" id="trash"></i></div>
    </div>
  </div>`;

export default { makePins };
