import firebase from 'firebase/app';
// import 'firebase/auth';
import boards from '../../components/boards/boards';
import home from '../../components/home/home';
import singleBoard from '../../components/singleBoard/singleBoard';
// import smash from './smash';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const toggleLoginData = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boards.printUserBoards();
      $('body').on('click', '.board', singleBoard.makeSingleBoard);
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      home.printHome();
    }
  });
};

export default { toggleLoginData };
