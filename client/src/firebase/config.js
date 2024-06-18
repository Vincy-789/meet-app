import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKU-m6HyAsL-5eoVQQS2OXhRux_sb2G8U",
  authDomain: "meet-app-6b4c7.firebaseapp.com",
  projectId: "meet-app-6b4c7",
  storageBucket: "meet-app-6b4c7.appspot.com",
  messagingSenderId: "1044322632731",
  appId: "1:1044322632731:web:2e2ba4763f64849d37a4be",
  measurementId: "G-G2BEM8934W"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
