// Import the functions you need from the SDKs you need
import { initializeApp,getApp , getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/Storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KRY, // firebase API key to connect (.env.local)
  authDomain: "twitter-e3e38.firebaseapp.com",
  projectId: "twitter-e3e38",
  storageBucket: "twitter-e3e38.appspot.com",
  messagingSenderId: "56244067948",
  appId: "1:56244067948:web:580582eb18644c6d0dc249"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};
