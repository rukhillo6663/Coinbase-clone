import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcXSbG3ArEViAJ7kzCkDIJlYxjfjSociY",
  authDomain: "coinbase-clone-13481.firebaseapp.com",
  projectId: "coinbase-clone-13481",
  storageBucket: "coinbase-clone-13481.appspot.com",
  messagingSenderId: "207828217027",
  appId: "1:207828217027:web:b55d0d8d9635aa17e58676",
  measurementId: "G-V5TTC58QJZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
