import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp,
    collection,
    addDoc,
} from "firebase/firestore";

import { db } from "../firebase";

// Save User
export const saveUser = async (user) => {
    await setDoc(
        doc(db, "users", user.uid),
        {
            uid: user.uid,
            name: user.displayName || "",
            email: user.email,
            createdAt: serverTimestamp(),
        },
        { merge: true }
    );
};

// Get User
export const getUser = async (uid) => {
    const snap = await getDoc(doc(db, "users", uid));

    if (snap.exists()) {
        return snap.data();
    }

    return null;
};


export const saveOrder = async (orderData) => {
    const docRef = await addDoc(collection(db, "orders"), {
        ...orderData,
        createdAt: serverTimestamp(),
    });

    return docRef.id;
};