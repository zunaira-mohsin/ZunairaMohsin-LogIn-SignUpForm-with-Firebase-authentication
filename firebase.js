import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {  getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider,signInWithPopup,signOut 
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOfLlzyVFC5cz7IAaGDqaAsxTIrRLelmk",
  authDomain: "fir-project-01-7803c.firebaseapp.com",
  projectId: "fir-project-01-7803c",
  storageBucket: "fir-project-01-7803c.firebasestorage.app",
  messagingSenderId: "960938746501",
  appId: "1:960938746501:web:79be6d5c83669fb4983fec",
  measurementId: "G-MHBLYN6WLL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {auth,db,provider,collection,addDoc,signOut,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged
};
