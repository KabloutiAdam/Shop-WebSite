import Header from "@/components/header/header";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "@/components/sidebar/sidebar";
import axios from "axios"
import ProductSection from "@/components/product/productSection";
import ProductList from "@/components/product/productList";
import ProductCard from "@/components/product/productCard";
import Footer from "@/components/footer/footer";
import { productInterface } from "@/interfaces";





const SearchPage: React.FC = () => {
    

    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')
    const [productsList, setProductsList] = useState<productInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [noResult, setNoResult] = useState(false)

    useEffect(() => {
        const fetchFilteredProducts = async () => {
        setLoading(true)
        setNoResult(false)
        if (!!query) {
            try {
              const res = await axios.get("http://localhost:3040/api/products", {
                params: { query },
              });
              console.log(res.data)
              setProductsList(res.data);

            if(res.data.length == 0){
                setNoResult(true)
            }
              
            } catch (error) {
              console.error("Erreur lors de la recherche :", error);
              setNoResult(true)
            } finally{
                setLoading(false)
            }
          } else {
            setProductsList([]);
            
          }
        }

        fetchFilteredProducts()
    }, [query, ]);



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
                                <p className="text-2xl text-left pl-12 font-bold text-gray-800">Recherche</p>
                            </div>



                            <ProductList>

                                {
                                    loading ?
                                        <p>Loading</p>
                                        : noResult ?
                                        <p>no result</p> : 
                                        productsList.map(product => (
                                            <ProductCard product={product} />
                                        )) 

                                }
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

export default SearchPage;
