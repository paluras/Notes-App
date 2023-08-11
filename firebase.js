import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDFT1GWhniyab2kc6zi6iVj3gKcdfL22us",
  authDomain: "scrimba-fd6cf.firebaseapp.com",
  projectId: "scrimba-fd6cf",
  storageBucket: "scrimba-fd6cf.appspot.com",
  messagingSenderId: "804085032686",
  appId: "1:804085032686:web:b4d74bbfd2cba42a49f5ff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
