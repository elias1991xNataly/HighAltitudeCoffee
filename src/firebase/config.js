
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fir-api-97fd7.firebaseapp.com",
  projectId: "fir-api-97fd7",
  storageBucket: "fir-api-97fd7.appspot.com",
  messagingSenderId: "213598761882",
  appId: "1:213598761882:web:5f02f24bc355e6b44f0023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

