// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIubrceAGMkvJyhms_LZFsprCBLC3vn2E",
  authDomain: "dragon-news-ba2a9.firebaseapp.com",
  projectId: "dragon-news-ba2a9",
  storageBucket: "dragon-news-ba2a9.appspot.com",
  messagingSenderId: "864746478063",
  appId: "1:864746478063:web:4bd281a65d1d8b536cfe1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;