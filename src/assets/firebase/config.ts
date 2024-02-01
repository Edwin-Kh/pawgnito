import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj0P-gDrVoWN-Ja1BX_Q3MMjJqQjN5u0Y",
  authDomain: "pawgnito-593fd.firebaseapp.com",
  projectId: "pawgnito-593fd",
  storageBucket: "pawgnito-593fd.appspot.com",
  messagingSenderId: "29293677977",
  appId: "1:29293677977:web:ccea252d0c8d5db88d9708"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);