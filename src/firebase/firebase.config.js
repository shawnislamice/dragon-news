// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKpekhonYlEDSW_NFcMt8ItRmCYe6slH8",
  authDomain: "dragon-news-889c0.firebaseapp.com",
  projectId: "dragon-news-889c0",
  storageBucket: "dragon-news-889c0.appspot.com",
  messagingSenderId: "823553538761",
  appId: "1:823553538761:web:d859158bd8f1c0f7db2b18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
