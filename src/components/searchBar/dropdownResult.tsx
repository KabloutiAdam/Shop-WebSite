import { dropdownResultInterface, productInterface } from "@/interfaces";
import { use, useEffect } from "react";
import { Link } from "react-router-dom";

import PreviewCard from "../product/previewCard";

const DropdownResults: React.FC<dropdownResultInterface> = ({ filteredProducts, showDropdown, onSelect }) => {




    //Vérifier si la catégorie est déjà dans la liste

    // Regrouper les produits par catégorie
    const groupedByProductId: Record<string, { id: number, name: string }[]> = {};

    filteredProducts.forEach((product) => {
        const cat = product.category_traduction;
        const itemObj = { id: product.id, name: product.item_traduction };

        if (!groupedByProductId[cat]) {
            groupedByProductId[cat] = [];
        }

        // Éviter les doublons d'items dans la même catégorie
        const exists = groupedByProductId[cat].some(item => item.id === itemObj.id);
        if (!exists) {
            groupedByProductId[cat].push(itemObj);
        }

    });

    const groupedByCategory: Record<
        string,
        {
            category: string;
            items: { name: string; slug: string }[];
        }
    > = {};

    filteredProducts.forEach((product) => {
        const categoryLabel = product.category_traduction;
        const categorySlug = product.category_name;
        const itemName = product.item_traduction;
        const itemSlug = product.item_name;

        if (!groupedByCategory[categoryLabel]) {
            groupedByCategory[categoryLabel] = {
                category: categorySlug,
                items: [],
            };
        }

        const alreadyExists = groupedByCategory[categoryLabel].items.some(
            (item) => item.slug === itemSlug
        );

        if (!alreadyExists) {
            groupedByCategory[categoryLabel].items.push({
                name: itemName,
                slug: itemSlug,
            });
        }
    });









    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="h-140 w-[90%] bg-white shadow-2xl rounded-lg overflow-y-auto absolute mt-2 border z-50 grid grid-cols-2 grid-rows-1">

                {/* Conteneur catégories + items */}
                <div className="w-full h-full border-b pl-30 p-12 border-gray-200 col-start-1 row-start-1 col-span-1 row-span-1">
                    {showDropdown ?
                        Object.entries(groupedByCategory).map(([categoryLabel, data]) => (
                            <div key={categoryLabel} className="mb-4 text-left">
                                <p className="font-bold text-3xl">{categoryLabel}</p>
                                <ul className="ml-40 text-sm text-gray-700">
                                    {data.items.map((item) => (
                                        <li key={item.slug}>
                                            <Link onClick={() => onSelect()} to={`/${data.category}/${item.slug}`} >
                                                <span className="w-fit p-3 text-xl cursor-pointer hover:text-blue-500 inline-block">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        )) :
                        <p>Aucun résultat trouvé</p>}
                </div>

                {/* Conteneur productCard*/}
                <div className="w-full mt-5 mb-5 border-l border-gray-200 col-start-2 row-start-1 col-span-1 row-span-1">
                    {filteredProducts.length > 0 &&
                        filteredProducts.slice(0, 3).map((product, index) => (
                            <div key={index}>
                                <PreviewCard product={product} />
                            </div>



                        ))}





                </div>
            </div>
        </div>
    );
};

export default DropdownResults;
