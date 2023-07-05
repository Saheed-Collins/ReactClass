// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgBFV81PfeJv82MRcKhOYRMar3r1g1mU",
  authDomain: "react-firebase-ddefd.firebaseapp.com",
  projectId: "react-firebase-ddefd",
  storageBucket: "react-firebase-ddefd.appspot.com",
  messagingSenderId: "1030361863731",
  appId: "1:1030361863731:web:c07421d98bb43904b9b546"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore()

