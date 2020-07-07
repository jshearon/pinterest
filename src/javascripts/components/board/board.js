const makeBoard = (board) => {
  let domString = `
  <div class="card mx-auto mt-5 w-25 board">
    <div class="card-body" id="${board.id}">
    <h5 class="card-title">${board.name}</h5>
      <div class="masonry-with-columns">`;
  let imageCount = 0;
  board.previewPins.slice(0, 4).forEach((image) => {
    domString += `<img src="${image}" id="${imageCount}-${board.id}">`;
    imageCount += 1;
  });
  domString += `</div>
              <div class="w-100 text-right mt-auto trashBoard" id="${board.id}">
                <i class="fas fa-trash" id="trashBoard"></i>
              </div>
            </div>
          </div>`;
  return domString;
};

export default { makeBoard };
