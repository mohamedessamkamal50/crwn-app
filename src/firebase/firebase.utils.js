import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEZK9Z_F3dFyy35_jhTyAnEn2ddfpNWhw",
    authDomain: "crwn-db-70386.firebaseapp.com",
    databaseURL: "https://crwn-db-70386.firebaseio.com",
    projectId: "crwn-db-70386",
    storageBucket: "crwn-db-70386.appspot.com",
    messagingSenderId: "596301659896",
    appId: "1:596301659896:web:9cbf4f7a3b89babb40c50d",
    measurementId: "G-4633WXRQ33"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;