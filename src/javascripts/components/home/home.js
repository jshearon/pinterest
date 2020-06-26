import utils from '../../helpers/utils';

const printHome = () => {
  const domString = '<h1>Pinterest</h1>';
  utils.printToDom('#content', domString);
};

export default { printHome };
