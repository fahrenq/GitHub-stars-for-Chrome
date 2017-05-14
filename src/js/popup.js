import '../css/popup.css';

import APP_CONFIG from './secrets.firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp(APP_CONFIG);

document.querySelector('#auth').addEventListener('click', () => {
  chrome.runtime.sendMessage({ from: 'popup', action: 'authenticate' });
});

console.log(firebase.UserInfo);
