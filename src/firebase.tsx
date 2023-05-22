import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDyFuhYaCbja6NHdrqEnb47Co6ZKZNnHuA",
  authDomain: "flashcardapp-276b1.firebaseapp.com",
  projectId: "flashcardapp-276b1",
  storageBucket: "flashcardapp-276b1.appspot.com",
  messagingSenderId: "260881929818",
  appId: "1:260881929818:web:7b6122f7e02e6c49bb2a63",
  measurementId: "G-J2GGTP2VH7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);