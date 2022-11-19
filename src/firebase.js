// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD8Fd56kpP6Mc8a9h-BTRM17hAKZaGpLMM",
  authDomain: "personalportolio-15e53.firebaseapp.com",
  projectId: "personalportolio-15e53",
  storageBucket: "personalportolio-15e53.appspot.com",
  messagingSenderId: "508668036873",
  appId: "1:508668036873:web:5c8b272a1185ad451bb5d8",
  measurementId: "G-J2FXCN9VR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);