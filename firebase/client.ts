// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {  getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIifSR7Ah0yZhTmXvFgogJvOR0M8DlcTA",
  authDomain: "preppal-829b4.firebaseapp.com",
  projectId: "preppal-829b4",
  storageBucket: "preppal-829b4.firebasestorage.app",
  messagingSenderId: "393540757319",
  appId: "1:393540757319:web:f8e527d1f6d9bf6c2a8e62",
  measurementId: "G-WQ53GQS8F2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
