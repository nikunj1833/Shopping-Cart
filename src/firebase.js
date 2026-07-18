import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCded7iYaHl2dKOvUqn62F8IUG5oZDkwyQ",
  authDomain: "hp-vk-shopping-cart.firebaseapp.com",
  projectId: "hp-vk-shopping-cart",
  storageBucket: "hp-vk-shopping-cart.firebasestorage.app",
  messagingSenderId: "357604440030",
  appId: "1:357604440030:web:acc4a3f39c110fc7c68f4f",
  measurementId: "G-KKBMT5J37K",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;