import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3gSAvFIyqfq2hkSF9ylscYF0SuyQg2N4",
    authDomain: "journal-app-7544e.firebaseapp.com",
    projectId: "journal-app-7544e",
    storageBucket: "journal-app-7544e.appspot.com",
    messagingSenderId: "777955661892",
    appId: "1:777955661892:web:6ec4e31e24e923fdf80411"
  };

initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}