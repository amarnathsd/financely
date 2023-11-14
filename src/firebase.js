// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4yXTOJjU1pU2C7kj6yYVjaOAPBfrTzLo",
  authDomain: "financely-69719.firebaseapp.com",
  projectId: "financely-69719",
  storageBucket: "financely-69719.appspot.com",
  messagingSenderId: "149613856903",
  appId: "1:149613856903:web:d60571e24c31c186591022",
  measurementId: "G-WQZ3Y37TY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {db, auth, provider, doc, setDoc};