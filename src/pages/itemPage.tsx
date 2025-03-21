import Header from "@/components/header/header";
import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "@/components/sidebar/sidebar";
import { PRODUCTS } from "@/database/products";
import ProductSection from "@/components/product/productSection";
import ProductList from "@/components/product/productList";
import ProductCard from "@/components/product/productCard";




const ItemPage: React.FC = () => {
    const { category, tag } = useParams<{ category: string; tag: string }>();
    
    

    const productsList = PRODUCTS.items.filter(item => item.item === tag)

    return (
        <>
            <Header />
            <div className="grid grid-cols-[2fr_8fr_2fr] h-full">
                <SideBar />
                <main className="mt-10">
                    <div className="w-full h-full  ">
                        <ProductSection>
                            {/* Ajouter les filtres ici*/}
                            <div className="w-full h-40 border-b-1 border-gray-200">

                            </div>



                            <ProductList>
                        
                                {productsList.map(product  => (
                                    <ProductCard product={product}/>
                                ))}
                            </ProductList>

                        </ProductSection>

                    </div>

                </main>

                <div className="bg-gray-800 text-white p-4">

                </div>

            </div>
        </>
    );
};

export default ItemPage;
