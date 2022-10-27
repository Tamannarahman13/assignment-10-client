import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()



const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState({})
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update name
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // const varifyEmail = () => {
    //     return sendEmailVerification(auth.currentUser)
    // }
    // signin with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logout = () => {
        return signOut(auth)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = { user, createUser, updateUserProfile, signInWithGoogle, logout, signIn }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('on satate change', currentUser);
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;