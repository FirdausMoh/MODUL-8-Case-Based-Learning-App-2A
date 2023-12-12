
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBrDsVqprx-dsEoGGjy7GhMiwh4xRXVl5s",
  authDomain: "terserah-7db38.firebaseapp.com",
  projectId: "terserah-7db38",
  storageBucket: "terserah-7db38.appspot.com",
  messagingSenderId: "1008192113584",
  appId: "1:1008192113584:web:5b3900507471202972a475"
});

const FIREBASE = firebase;

export default FIREBASE;

