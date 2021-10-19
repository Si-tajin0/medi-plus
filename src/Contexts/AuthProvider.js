import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// create Auth context
export const AuthContext = createContext();

// AuthProvider declare the function
const AuthProvider = ({ children }) => {
    // import use Firebase
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;