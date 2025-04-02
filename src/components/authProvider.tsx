import { login } from '@/api/auth'
import { user } from '@/interfaces';
import {
    createContext,
    PropsWithChildren,
    use,
    useContext,
    useEffect,
    useState,
} from 'react';

type AuthContext = {
    authToken?: string | null;
    currentUser?: user | null;
    isUserConnected: boolean
    handleLogin: (email: string, password: string) => Promise<"erreur" | null>;
    handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>();
    const [currentUser, setCurrentUser] = useState<user | null>();
    const [isUserConnected, setIsUserConnected] = useState<boolean>(!!authToken);


    console.log(isUserConnected)

    useEffect(() => {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setCurrentUser(parsedUser);
            setIsUserConnected(true);
        }
    }, []);

    async function handleLogin(email: string, password: string) {
        try {
            const response = await login(email, password);

            const { authToken, user } = response[1];
            console.log(response)
            setAuthToken(authToken);
            setCurrentUser(user);
            setIsUserConnected(true)
            localStorage.setItem("authUser", JSON.stringify(user));
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
        localStorage.removeItem("authUser");
        setIsUserConnected(false)
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