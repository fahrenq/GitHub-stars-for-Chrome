import APP_CONFIG from './secrets.firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp(APP_CONFIG);
const provider = new firebase.auth.GithubAuthProvider();

export default () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // const token = result.credential.accessToken;
      // const user = result.user;
    })
    .catch(error => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
    });
};

// return new Promise((resolve, reject) => {
// });
//
// reject({ errorCode, errorMessage, email, credential });
// resolve({ token, user });
