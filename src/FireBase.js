// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCejcwWbgnRYBugEIKYD31kT-NQLVSaE4",
  authDomain: "clone-76551.firebaseapp.com",
  projectId: "clone-76551",
  storageBucket: "clone-76551.appspot.com",
  messagingSenderId: "686810462328",
  appId: "1:686810462328:web:450be229a525e32a60d58d",
  measurementId: "G-6B70M8PTL1",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
