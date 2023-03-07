import { initializeApp } from "firebase/app";
const { getFirestore } = require("firebase-admin/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDIuafINx6k2okYOmfjPVouLpFMiKsJUjU",
  authDomain: "clone-8925e.firebaseapp.com",
  projectId: "clone-8925e",
  storageBucket: "clone-8925e.appspot.com",
  messagingSenderId: "875645021784",
  appId: "1:875645021784:web:0baf2bc534990a6f47242d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = app.auth();

export { db, auth };
