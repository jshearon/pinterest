import './pins.scss';

const makePins = (pin) => `
  <div class="card mx-auto mt-5 board" draggable="true">
    <div class="card-body" id="${pin.id}">
      <h5 class="card-title">${pin.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text"><img src="${pin.image}"></p>
    </div>
  </div>`;

export default { makePins };
