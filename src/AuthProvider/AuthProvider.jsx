import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const loggedUser = localStorage.getItem('user-data');


    useEffect(() => {
        const loggedUser = localStorage.getItem('user-data');
        if(loggedUser){
            setUser(JSON.parse(loggedUser));
            setLoading(false);
        }
    }, [isLoggedIn])

    const logout = () =>{
        localStorage.removeItem('user-data');
        setUser('');
    }


    const userInfo = {
        user,
        loading,
        setUser,
        setIsLoggedIn,
        logout
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;