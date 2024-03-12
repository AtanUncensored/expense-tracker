import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBpCm6JSh1Ib0xyiynrjqA6DirnwDocX8",
  authDomain: "expenses-8041a.firebaseapp.com",
  projectId: "expenses-8041a",
  storageBucket: "expenses-8041a.appspot.com",
  messagingSenderId: "439512689463",
  appId: "1:439512689463:web:fe88128889ce59a5c888b2"
};



initializeApp(firebaseConfig);

const db = getFirestore();
export default db