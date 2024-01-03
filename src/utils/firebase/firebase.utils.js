import { initializeApp } from "firebase/app";
// the initialize app function creates an app instance for you based off of some type of config. This config is an object that allows us to attach this firebase app instance to that instance that we have online.

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// doc is used to getting the document instance, getdoc helps in Getting the document data, setdoc helps in settting the document data.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSuOOvllL-5itXOzVA96b7WW2gOwEvXrw",
  authDomain: "classic-garmenting-db.firebaseapp.com",
  projectId: "classic-garmenting-db",
  storageBucket: "classic-garmenting-db.appspot.com",
  messagingSenderId: "1066645483905",
  appId: "1:1066645483905:web:d2ea69a5903a1f0ab87880",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// this allows me to make crud actions to my own instance of firebase

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data don't exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if user data exist
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};
