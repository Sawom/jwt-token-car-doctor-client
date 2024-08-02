// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdtwzYKPJJWZPQiHwDWOP_ubIVQyyk6Aw",
  authDomain: "jwttoken-544f7.firebaseapp.com",
  projectId: "jwttoken-544f7",
  storageBucket: "jwttoken-544f7.appspot.com",
  messagingSenderId: "438656104279",
  appId: "1:438656104279:web:b8b893d65f3b9a8e2b3012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;