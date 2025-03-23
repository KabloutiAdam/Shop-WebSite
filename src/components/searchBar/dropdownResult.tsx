import { dropdownResultInterface, productInterface } from "@/interfaces";
import { Link } from "react-router-dom";

const DropdownResults: React.FC<dropdownResultInterface> = ({ filteredProducts, onSelect }) => {
    if (filteredProducts.length === 0) return null;

    //  Regrouper les produits par catégorie
    const groupedByCategory: Record<string, string[]> = {};

    //Vérifier si la catégorie est déjà dans la liste
    filteredProducts.forEach((product) => {
        if (!groupedByCategory[product.category]) {
            groupedByCategory[product.category] = [];
        }

        // Ajouter item s’il n’est pas déjà dans la liste
        if (!groupedByCategory[product.category].includes(product.item)) {
            groupedByCategory[product.category].push(product.item);
        }
    });

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="h-130 w-[90%] bg-white shadow-2xl rounded-lg overflow-y-auto absolute mt-2 border z-50 grid grid-cols-3 grid-rows-3">

                {/* Conteneur catégories + items */}
                <div className="w-full h-full border-b pl-30 p-12 border-gray-200 col-start-1 row-start-1 col-span-2 row-span-3 bg-amber-200">
                    {Object.entries(groupedByCategory).map(([category, items]) => (
                        <div key={category} className="mb-4 text-left">
                            <p className="font-bold text-3xl mb-1 ">{capitalizeFirstLetter(category)} :</p>
                            <ul className="ml-40  text-sm text-gray-700 ">
                                {items.map((item) => (
                                    <li className="w-fit p-3 text-xl cursor-pointer hover:text-blue-500" key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Conteneur productCard*/}
                <div className="w-full h-full border-b border-gray-200 col-start-3 row-start-1 col-span-1 row-span-3 bg-amber-300" />

            </div>
        </div>
    );
};

export default DropdownResults;
