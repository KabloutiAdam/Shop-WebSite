import Header from "@/components/header/header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "@/components/sidebar/sidebar";
import axios from "axios"
import ProductSection from "@/components/product/productSection";
import ProductList from "@/components/product/productList";
import ProductCard from "@/components/product/productCard";
import Footer from "@/components/footer/footer";
import { productInterface } from "@/interfaces";





const ItemPage: React.FC = () => {
    const { category, tag } = useParams<{ category: string; tag: string }>();



    const [productsList, setProductsList] = useState<productInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(res => {
                const allProducts = res.data;
                const filtered = tag
                    ? allProducts.filter((product: any) => product.item_name === tag)
                    : allProducts.filter((product: any) => product.category_name === category);
                setProductsList(filtered);
            })
            .catch(err => console.error("Erreur chargement produits :", err))
            .finally(() => setLoading(false));
    }, [tag]);



    return (
        <>
            <Header />
            <div className="grid grid-cols-[2fr_8fr_2fr] h-fit">
                <SideBar />
                <main className="mt-10">
                    <div className="w-full h-full  ">
                        <ProductSection>
                            {/* Ajouter les filtres ici*/}
                            <div className="w-full h-40 border-b-1 border-gray-200">
                                <p className="text-2xl text-left pl-12 font-bold text-gray-800">Catégorie {tag?.toUpperCase()}</p>
                            </div>



                            <ProductList>

                                {productsList.map(product => (
                                    <ProductCard product={product} />
                                ))}
                            </ProductList>

                        </ProductSection>

                    </div>

                </main>

                <div className="bg-gray-800 h-auto text-white p-4">

                </div>

            </div>

            <Footer />
        </>
    );
};

export default ItemPage;
