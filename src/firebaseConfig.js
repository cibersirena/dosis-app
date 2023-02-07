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

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
export const productsCollection = collection(dataBase, "productos"); 
export const categoryCollection = collection(dataBase, "categorias");
export const salesCollection = collection(dataBase, "ventas");