import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signinWithGoogle = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createAccount = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Signin = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name) => {

        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name 
        })
    }

    const forgetPassword = email => {

        return sendPasswordResetEmail(auth, email)
    }

    const logout = () => {

        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

        })

        return () => {
            return unsubscriber
        }
    }, [])


    const authInfo = {
        user,
        loading,
        signinWithGoogle,
        createAccount,
        Signin,
        forgetPassword,
        updateName,
        logout
    }


    return <AuthContext.Provider
        value={authInfo}
    >
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;