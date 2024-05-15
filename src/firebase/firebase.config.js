// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSDAKup2JxwHzz3CZNabQ91fzGPVBJmYU",
    authDomain: "auth-firebase-context-fad67.firebaseapp.com",
    projectId: "auth-firebase-context-fad67",
    storageBucket: "auth-firebase-context-fad67.appspot.com",
    messagingSenderId: "6575479757",
    appId: "1:6575479757:web:0bc96dc7da674e7a484284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;