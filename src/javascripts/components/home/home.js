import utils from '../../helpers/utils';

const printHome = () => {
  const domString = '<h1 class="text-center">Please Log In to View Your Boards</h1>';
  utils.printToDom('#content', domString);
};

export default { printHome };
