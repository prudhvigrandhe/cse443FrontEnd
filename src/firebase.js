// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATVedIjCExeAUl9Wa4r0NrySnkwcJ5UvI",
  authDomain: "cse443-dd05d.firebaseapp.com",
  projectId: "cse443-dd05d",
  storageBucket: "cse443-dd05d.appspot.com",
  messagingSenderId: "662577245001",
  appId: "1:662577245001:web:fcdfb70a870740fbc14898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();