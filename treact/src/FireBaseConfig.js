// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9OG9KlpOKU9ALtNKbfvZNufSWF6zrRFs",
    authDomain: "eparcel-bff5e.firebaseapp.com",
    projectId: "eparcel-bff5e",
    storageBucket: "eparcel-bff5e.appspot.com",
    messagingSenderId: "236961156380",
    appId: "1:236961156380:web:ae54a0bb275000ac1cbed9",
    measurementId: "G-P44CP418F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };