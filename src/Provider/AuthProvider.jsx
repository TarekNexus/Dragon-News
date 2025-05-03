import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

   

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

 const updateUser=(updatedData)=>{
  return updateProfile(auth.currentUser,updatedData)
 }


    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoding(false)
        });
        return () => {
            unsubscribe();

        };
    }, []);

    const AuthData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading,
        setLoding,
        updateUser
    };

    return <AuthContext value={AuthData}>
        {children}
    </AuthContext>
};

export default AuthProvider;