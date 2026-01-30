/* eslint-disable react-refresh/only-export-components */
import localStorageService from '@services/localStorage.service';
import { createContext, useCallback, useContext, useState } from 'react';
import type { FC } from 'react';
interface IAuthContextValue {
    signIn: boolean;
    signInHandler: (token: string) => void;
    signOutHandler: () => void;
}

const AuthContext = createContext({} as IAuthContextValue);

export const AuthProvider: FC<{
    children: React.ReactNode;
}> = ({ children }) => {

    const [signIn, setSignIn] = useState(
        localStorageService.getToken() ? true : false,
    );

    const signInHandler = useCallback((token: string) => {
        localStorageService.saveToken(token);
        setSignIn(true);
    }, []);

    const signOutHandler = () => {
        setSignIn(false);
        localStorageService.removeToken();
        localStorageService.removeObject('usuario');
    };

    return (
        <AuthContext.Provider value={{
            signIn, signInHandler, signOutHandler,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export default useAuth;
