import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "process.env.AUTH_DOMAIN",
  projectId: "process.env.PPROJECT_ID",
  storageBucket: "process.env.STORAGE",
  messagingSenderId: "process.env.MSG_SEND",
  appId: "process.env.ID",
  measurementId: "process.env.MEASURE_ID"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
