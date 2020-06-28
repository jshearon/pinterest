const makeBoard = (board) => `
  <div class="card mx-auto mt-5 w-25 board">
    <div class="card-body" id="${board.id}">
      <h5 class="card-title">${board.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`;

export default { makeBoard };
