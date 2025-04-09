
// Interface du contexte d'authentification
export interface AuthContextType {
    token: string | null; // Un token string ou null
    isUserConnected: boolean; // Est ce que l'utilisateur est connecté
    isLoading: boolean; // Est ce que le chargement est en cours
    error: string | null; // Un message d'erreur ou null
    login: (token: string) => void; // Fonction pour se login avec le token comme paramètre
    logout: () => void; // Fonction pour se logout
}

// Interface d'un utilisateur
export type user = {
    id: number;
    login: string;
    role: string;
}


// Interface des produits de la boutique
export interface productInterface {
    id: number;
    name: string;
    item_name: string;
    item_traduction: string;
    image_link: string
    category_name: string;
    category_traduction: string;
    price: number;
    brand_name: string;
    description: string;
    quantity: number;
}

export interface categoryInterface {
    name: string;
}

//Interface résultat recherche item filtré
export interface dropdownResultInterface {
    filteredProducts: productInterface[]; // Tableau de produits filtrés
    showDropdown: boolean;
    onSelect: () => void; // Fonction de sélection
}

