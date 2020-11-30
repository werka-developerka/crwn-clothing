import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAzuXK_QmmfE8LCnNJu3UW-rwS524-pjr4",
  authDomain: "crown-db-2fe95.firebaseapp.com",
  databaseURL: "https://crown-db-2fe95.firebaseio.com",
  projectId: "crown-db-2fe95",
  storageBucket: "crown-db-2fe95.appspot.com",
  messagingSenderId: "595552230668",
  appId: "1:595552230668:web:f7258c41c90a0568fc7d29"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut().then(function() {
  console.log('signed out');
}).catch(function(error) {
  console.log('error signing out')
});;

export default firebase;