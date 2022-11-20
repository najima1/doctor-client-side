
import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/Firebase'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    //create user with email & password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user with email & password
    const login_user = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out/logout user
    const log_out_user = () => {
        setLoading(true)
        return signOut(auth)
    }

    //reset password with email
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    //signInWithGoogle
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //get current user from firebase
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, userCredential => {
            setUser(userCredential);
            setLoading(false)
        })

        return () => unSubscribe()
    }, [])

    //send all user information
    const userInfo = {
        loading,
        user,
        setLoading,
        createUser,
        login_user,
        log_out_user,
        resetPassword,
        loginWithGoogle
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default ContextProvider
