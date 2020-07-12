import './pins.scss';

const makePins = (pin, userBoards) => {
  let domString = `
        <div class="card mx-auto pins" draggable="true" id="${pin.boardId}" data-pin-id="${pin.id}">
          <div class="card-body pin-card-body">
            <img class="w-100" src="${pin.image}">
            <span class="badge badge-pill badge-light pinLink"><a href="${pin.url}">${pin.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').substring(0, 15)}...</a></span>
            <span class="fa-stack fa-lg editPin dropdown" data-toggle="dropdown">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fas fa-pen fa-stack-1x"></i>
            </span>
            <form class="dropdown-menu dropdown-menu-center p-4 editAPin" id="edit-pin-${pin.id}">
                <div class="form-group">
                  <label for="new-board-name">Pin Name</label>
                  <input type="text" class="form-control" name="title" value="${pin.title}">
                </div>
                <div class="form-group">
                  <label for="new-board-name">URL</label>
                  <input type="text" class="form-control" name="url" value="${pin.url}">
                </div>
                <div class="form-group">
                  <label for="new-board-name">Image URL</label>
                  <input type="text" class="form-control" name="image" value="${pin.image}">
                </div>`;
  userBoards.forEach((board) => {
    domString += `
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="selectedBoard" value="${board.id}" ${board.id === pin.boardId ? 'checked' : ''}>
                  <label class="form-check-label" for="selected-board">
                    ${board.name}
                  </label>
                </div>`;
  });
  domString += `
            <input type="hidden" name="pinId" value="${pin.id}">
            <br>
            <button type="submit" class="btn btn-primary m-0">Update Pin</button>
        </form>
      <span class="fa-stack fa-lg trashPin">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-trash fa-stack-1x"></i>
      </span>
    </div>
    <h5 class="card-title mt-auto">${pin.title}</h5>
  </div>`;
  return domString;
};

export default { makePins };
