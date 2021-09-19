import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../Server/Firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

function AuthProvider({children}) {

    const [curretnUSer, setCurretnUSer] = useState();
    const [loading, setLoading] = useState(false);

    function signUp(email,password) {

    }

    function logIn(email,password) {

    }

    function logOut() {

    }

    function resetPassword(email) {

    }

    function updateEmail(email) {

    }

    function updatePassword(password) {

    }


    useEffect(() => {
        
    }, [])

    const value = {};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;