// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjFE-ogIX2ULhGeY7--uBYO5-n517FQJ8",
  authDomain: "todo-list-6fedf.firebaseapp.com",
  projectId: "todo-list-6fedf",
  storageBucket: "todo-list-6fedf.appspot.com",
  messagingSenderId: "1063228694946",
  appId: "1:1063228694946:web:90bf6a025bad27278052fb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};