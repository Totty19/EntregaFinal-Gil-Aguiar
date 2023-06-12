import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARLjIfgxzZE5h5WTAlqM8n_rzCgcMyZH4",
    authDomain: "prueba-test-tomas.firebaseapp.com",
    projectId: "prueba-test-tomas",
    storageBucket: "prueba-test-tomas.appspot.com",
    messagingSenderId: "354169699083",
    appId: "1:354169699083:web:4a2469074198863be7400e",
    measurementId: "G-9CJSPPX7TN"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);