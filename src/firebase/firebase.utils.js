import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDW2T-DCMsG_2Wwst4VIY20VfQEGHx6o9c",
  authDomain: "crwn-db-5aa4a.firebaseapp.com",
  projectId: "crwn-db-5aa4a",
  storageBucket: "crwn-db-5aa4a.appspot.com",
  messagingSenderId: "562565148197",
  appId: "1:562565148197:web:c0ea18fb8ea3830bac99cc",
  measurementId: "G-RFC2KDX8BV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
