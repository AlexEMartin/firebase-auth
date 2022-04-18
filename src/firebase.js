// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7wMoDBbqpBnAJGZNvZESAxi3Ykgijzxk",
  authDomain: "auth-practice-db363.firebaseapp.com",
  projectId: "auth-practice-db363",
  storageBucket: "auth-practice-db363.appspot.com",
  messagingSenderId: "802502339171",
  appId: "1:802502339171:web:d7363f046b4408ec05a656"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)