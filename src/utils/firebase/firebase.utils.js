import { initializeApp } from "firebase/app";
// the initialize app function creates an app instance for you based off of some type of config. This config is an object that allows us to attach this firebase app instance to that instance that we have online.

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// doc is used to getting the document instance, getdoc helps in setting the document data, setdoc helps in settting the document data.

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
