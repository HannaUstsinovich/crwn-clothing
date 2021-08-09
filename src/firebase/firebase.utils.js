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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(displayName);
    console.log(displayName);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
