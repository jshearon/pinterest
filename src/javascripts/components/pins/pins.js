import './pins.scss';

const makePins = (pin) => `
  <div class="card mx-auto pins" draggable="true" id="${pin.boardId}" data-pin-id="${pin.id}">
    <div class="card-body pin-card-body">
      <img class="w-100" src="${pin.image}">
      <span class="badge badge-pill badge-light pinLink"><a href="${pin.url}">${pin.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').substring(0, 15)}...</a></span>
      <span class="fa-stack fa-lg trashPin">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-trash fa-stack-1x"></i>
      </span>
    </div>
    <h5 class="card-title mt-auto">${pin.title}</h5>
  </div>`;

// <div class="text-right mt-auto trashPin" id="${pin.boardId}" data-pin-id="${pin.id}"><i class="fas fa-trash trashPin"></i></div>

export default { makePins };
