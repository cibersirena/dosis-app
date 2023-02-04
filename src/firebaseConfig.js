import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKj-tOLooQtSUqDxAHt9kSfUNwEnVIA2M",
  authDomain: "dosis-app-7bdda.firebaseapp.com",
  projectId: "dosis-app-7bdda",
  storageBucket: "dosis-app-7bdda.appspot.com",
  messagingSenderId: "804369768470",
  appId: "1:804369768470:web:e49c46340726040dae9537"
};

const app = initializeApp(firebaseConfig); // dato tipo FirebaseApp
const dataBase = getFirestore(app); // dato tipo Firestore
export const productsCollection = collection(dataBase, "productos"); // dato CollectionReference / Query
export const categoryCollection = collection(dataBase, "categorias"); // dato CollectionReference / Query
export const salesCollection = collection(dataBase, "ventas");