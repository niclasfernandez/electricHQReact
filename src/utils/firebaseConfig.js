// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIsk3sK-zO_PbA5eAEB0nwxLzau5QYqfg",
    authDomain: "elechq-e9cce.firebaseapp.com",
    projectId: "elechq-e9cce",
    storageBucket: "elechq-e9cce.appspot.com",
    messagingSenderId: "186953871449",
    appId: "1:186953871449:web:0133268cad070f52470148"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;