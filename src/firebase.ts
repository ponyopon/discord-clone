// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf_nqcOM0ZqiMV8F0cIogvL860uZ6T2hM",
  authDomain: "discord-clone-f1e42.firebaseapp.com",
  projectId: "discord-clone-f1e42",
  storageBucket: "discord-clone-f1e42.appspot.com",
  messagingSenderId: "152036325273",
  appId: "1:152036325273:web:c3d0af43d09f6561d00508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db};