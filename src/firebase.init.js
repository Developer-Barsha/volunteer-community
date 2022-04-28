// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbyFU0IwbuK7uYxNraRp50CMWKQGaZ00c",
  authDomain: "volunteer-community-c26d2.firebaseapp.com",
  projectId: "volunteer-community-c26d2",
  storageBucket: "volunteer-community-c26d2.appspot.com",
  messagingSenderId: "211088822569",
  appId: "1:211088822569:web:974513ab992820caec2738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);