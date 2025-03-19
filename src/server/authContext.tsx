import React, { createContext, useContext, useState, useEffect } from "react";


// Interface du contexte d'authentification
interface AuthContextType {
    token: string | null; // Un token string ou null
    isUserConnected: boolean; // Est ce que l'utilisateur est connecté
    login: (token: string) => void; // Fonction pour se login avec le token comme paramètre
    logout: () => void; // Fonction pour se logout
}



// Création du contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [token, setToken] = useState<string | null>(localStorage.getItem("token"))


    // L'utilisateur est connecté si un token est présent
    const isUserConnected = !!token;

    // Sauvegarde le token dans le localStorage quand il change
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    // Fonction pour connecter l'utilisateur
    const login = (token: string) => {
        setToken(token);
    };

    // Fonction pour déconnecter l'utilisateur
    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, isUserConnected, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser l'authentification
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};






