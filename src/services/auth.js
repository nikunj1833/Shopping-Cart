import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

// Signup
export const signup = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    await updateProfile(userCredential.user, {
        displayName: name,
    });

    await sendEmailVerification(userCredential.user);

    return userCredential.user;
};

// Login
export const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

    return userCredential.user;
};

// Logout
export const logout = () => signOut(auth);

// Current User Listener
export const observeAuth = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};