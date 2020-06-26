import '../styles/main.scss';
import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.toggleLoginData();
  auth.printLogInButton();
  auth.logoutEvent();
};

init();
