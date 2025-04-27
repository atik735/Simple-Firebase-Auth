// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcPfslayqyp3YQTxgkRBenwMKaf8fF71g",
  authDomain: "simple-firebase-auth2-23ecf.firebaseapp.com",
  projectId: "simple-firebase-auth2-23ecf",
  storageBucket: "simple-firebase-auth2-23ecf.firebasestorage.app",
  messagingSenderId: "715892312263",
  appId: "1:715892312263:web:b1afa2cb1a85bcd85156e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);