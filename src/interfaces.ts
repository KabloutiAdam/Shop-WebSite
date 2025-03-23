
// Interface du contexte d'authentification
export interface AuthContextType {
    token: string | null; // Un token string ou null
    isUserConnected: boolean; // Est ce que l'utilisateur est connecté
    login: (token: string) => void; // Fonction pour se login avec le token comme paramètre
    logout: () => void; // Fonction pour se logout
}


// Interface des produits de la boutique
export interface productInterface {
    id: number;
    name: string;
    item_name: string;
    image_link: string
    category_name: string;
    price: number;
    brand_name: string;
    description: string;
}

export interface categoryInterface {
    name: string;
}

//Interface résultat recherche item filtré
export interface dropdownResultInterface {
    filteredProducts: productInterface[]; // Tableau de produits filtrés
    onSelect: (product: productInterface) => void; // Fonction de sélection
}

