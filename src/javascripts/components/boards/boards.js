import utils from '../../helpers/utils';

const printBoards = () => {
  const domString = '<h1>Your Boards</h1>';
  utils.printToDom('#content', domString);
};

export default { printBoards };
