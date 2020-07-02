const makeBoard = (board) => {
  let domString = `
  <div class="card mx-auto mt-5 w-25 board">
    <div class="card-body" id="${board.id}">
    <h5 class="card-title">${board.name}</h5>
      <div class="masonry-with-columns">`;
  board.previewPins.forEach((image) => {
    domString += `<img src="${image}">`;
  });
  domString += `</div>
              </div>
            </div>`;
  return domString;
};

export default { makeBoard };
