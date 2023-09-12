// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV3JozVONX9uMlYFc1TM4uzZ_B_Zi5kZU",
  authDomain: "upheld-sublime-352607.firebaseapp.com",
  projectId: "upheld-sublime-352607",
  storageBucket: "upheld-sublime-352607.appspot.com",
  messagingSenderId: "246186426901",
  appId: "1:246186426901:web:56e9148401c9d6255d841c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db};