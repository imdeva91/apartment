import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBKrn7Qyfzkr5C5JI-LYs4AtXG50o6kGpU",
  authDomain: "house-market-5e096.firebaseapp.com",
  projectId: "house-market-5e096",
  storageBucket: "house-market-5e096.appspot.com",
  messagingSenderId: "464133609847",
  appId: "1:464133609847:web:7cc0b7f59b4e61a7c6e972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(); 