import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../Server/Firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

function AuthProvider({children}) {

    const userAuth = JSON.parse(localStorage.getItem('userAuth')) ? JSON.parse(localStorage.getItem('userAuth')) : ``;
    const [currentUser, setCurrentUser] = useState(userAuth);
    const [loading, setLoading] = useState(true);

    function signUp(email,password) {
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function logIn(email,password) {
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logOut() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user);
            setLoading(false);
            localStorage.setItem('userAuth', JSON.stringify(user));
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
        resetPassword,
        updateEmail,
        updatePassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;