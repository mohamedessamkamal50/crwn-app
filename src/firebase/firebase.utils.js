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

    export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get()

      if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
        } catch (error) {
          console.log('error creating user', error.massage);
        }
      }
      return userRef;
    }
    

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;