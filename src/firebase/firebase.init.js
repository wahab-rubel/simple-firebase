// Do not use cline site

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4IRQp0ogVtaxeSTasCgrMKOSpyM_BsH4",
  authDomain: "simple-firebase-dc256.firebaseapp.com",
  projectId: "simple-firebase-dc256",
  storageBucket: "simple-firebase-dc256.firebasestorage.app",
  messagingSenderId: "125571392730",
  appId: "1:125571392730:web:a165adfc1e1296108131e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;