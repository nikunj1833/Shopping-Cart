import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// All Orders
export const getOrders = async () => {
    const snapshot = await getDocs(collection(db, "orders"));

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

// All Users
export const getUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};