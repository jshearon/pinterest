import firebase from 'firebase/app';
// import 'firebase/auth';
import boards from '../../components/boards/boards';
import home from '../../components/home/home';
import singleBoard from '../../components/singleBoard/singleBoard';
// import smash from './smash';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const userPhoto = $('#user-photo');

const toggleLoginData = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userPhoto.attr('src', firebase.auth().currentUser.photoURL);
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boards.printUserBoards();
      $('#content').on('click', '.board', singleBoard.makeSingleBoard);
      $('#content').on('click', '#view-all-boards', boards.printUserBoards);
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      home.printHome();
    }
  });
};

export default { toggleLoginData };
