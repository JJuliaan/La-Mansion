// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM8OQOaveF5Nq4JAW3wyZy4Ij6p8AznN4",
  authDomain: "all-mightt.firebaseapp.com",
  projectId: "all-mightt",
  storageBucket: "all-mightt.appspot.com",
  messagingSenderId: "364409861225",
  appId: "1:364409861225:web:c2e8976aaf32a72b1c5ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);