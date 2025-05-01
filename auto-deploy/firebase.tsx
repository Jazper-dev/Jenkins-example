// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClqgpWSrOsI9NgmNACCq5cKlxuIFZwLfg",
  authDomain: "echo-a01.firebaseapp.com",
  databaseURL: "https://echo-a01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "echo-a01",
  storageBucket: "echo-a01.appspot.com",
  messagingSenderId: "497978490327",
  appId: "1:497978490327:web:9a17f15b36f04d6bae9f92",
  measurementId: "G-KX670393KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);