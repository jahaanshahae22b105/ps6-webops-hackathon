// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
import { GoogleAuthProvider, getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5V4VflKLi2SpyYR9PX7pFwczCUBv3ulo",
  authDomain: "team-management-soluti.firebaseapp.com",
  projectId: "team-management-soluti",
  storageBucket: "team-management-soluti.appspot.com",
  messagingSenderId: "140766099077",
  appId: "1:140766099077:web:5a97060b94a690b175dbec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
//export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

