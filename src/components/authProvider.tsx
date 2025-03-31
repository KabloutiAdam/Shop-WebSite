import { login } from '@/api/auth'
import { user } from '@/interfaces';
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';

type AuthContext = {
    authToken?: string | null;
    currentUser?: user | null;
    isUserConnected: boolean
    handleLogin: (email:string, password:string) => Promise<"erreur" | null>;
    handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>();
    const [currentUser, setCurrentUser] = useState<user | null>();

    const isUserConnected = !!authToken
    console.log(isUserConnected)

    useEffect(() => {
        // async function fetchUser() {
        //     try {
        //         const response = await getUser();

        //         const { authToken, user } = response[1];

        //         setAuthToken(authToken);
        //         setCurrentUser(user);
                
        //     } catch {
        //         setAuthToken(null);
        //         setCurrentUser(null);
        //     }
        // }

        // fetchUser();
    }, []);

    async function handleLogin(email:string, password:string) {
        try {
            const response = await login(email, password);

            const { authToken, user } = response[1];
            console.log(response)
            setAuthToken(authToken);
            setCurrentUser(user);
            localStorage.setItem('userToken', authToken)
            return null

        } catch {
            setAuthToken(null);
            setCurrentUser(null);
            return "erreur"
        }




    }

    async function handleLogout() {
        localStorage.removeItem("userToken");
        setAuthToken(null);
        setCurrentUser(undefined);
    }

    return (
        <AuthContext.Provider
            value={{
                authToken,
                currentUser,
                isUserConnected,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used inside of a AuthProvider');
    }

    return context;
}