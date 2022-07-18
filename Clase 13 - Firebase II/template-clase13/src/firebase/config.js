// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZMzaYTxrEBxidWc1j0Iq3Xi7A66wVQXo",
  authDomain: "reactjs-37075.firebaseapp.com",
  projectId: "reactjs-37075",
  storageBucket: "reactjs-37075.appspot.com",
  messagingSenderId: "313937679087",
  appId: "1:313937679087:web:165c5767437ebaa503811a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)