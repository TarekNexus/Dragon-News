// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtYOMeeiuZGWaKReeeCd5ewL6mu22qNZQ",
  authDomain: "dragon-news-tarek-8d5df.firebaseapp.com",
  projectId: "dragon-news-tarek-8d5df",
  storageBucket: "dragon-news-tarek-8d5df.firebasestorage.app",
  messagingSenderId: "469243483236",
  appId: "1:469243483236:web:677a3175ba1c0249167b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app