// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfKJpLMvYkyIx5a7rrm3_6lSL_2Bm3QqY",
  authDomain: "pantry-tracker-edfa3.firebaseapp.com",
  projectId: "pantry-tracker-edfa3",
  storageBucket: "pantry-tracker-edfa3.appspot.com",
  messagingSenderId: "148682402017",
  appId: "1:148682402017:web:a6ab82b836549d56482fa0",
  measurementId: "G-1G60FD1DY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
