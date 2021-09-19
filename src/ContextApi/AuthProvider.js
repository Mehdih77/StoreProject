import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../Server/Firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

function AuthProvider({children}) {

    const [curretnUSer, setCurretnUSer] = useState();
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
        return curretnUSer.updateEmail(email);
    }

    function updatePassword(password) {
        return curretnUSer.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChange( user => {
            setCurretnUSer(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        curretnUSer,
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