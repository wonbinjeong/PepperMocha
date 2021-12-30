import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);