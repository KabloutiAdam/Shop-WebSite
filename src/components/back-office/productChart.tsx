import { productInterface } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";


type Props = {
    onProductSelected: (product: productInterface | null) => void;
}


export default function ProductChart({onProductSelected} : Props) {


    const [query, setQuery] = useState("q");
    const [productsList, setProductsList] = useState<productInterface[]>([]);
    // @ts-ignore
    const [loading, setLoading] = useState(true);
     // @ts-ignore
    const [noResult, setNoResult] = useState(false)
    const [indexSelected, setIndexSelected] = useState<number | null>(null);



    useEffect(() => {
        const fetchFilteredProducts = async () => {
            setLoading(true)
            setNoResult(false)
            if (query.length > 0) {
                try {

                    const res = await axios.get("/api/products", {
                        params: { query },
                    });

                    setProductsList(res.data);
                    if (res.data.length == 0) {
                        setNoResult(true)
                    }

                } catch (error) {
                    console.error("Erreur lors de la recherche :", error);
                    setNoResult(true)
                } finally {
                    setLoading(false)
                }
            } else {
                const res = await axios.get("/api/products");
                setProductsList(res.data);
                setLoading(false)
            }
        }

        fetchFilteredProducts()
        setIndexSelected(null)
        
    }, [query]);

    const handleInputChange = (event: any) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <div className="w-full h-12 flex justify-start items-center">
                <input className="w-121 border ml-2 pl-12 shadow-sm rounded-2xl" type="text" placeholder="Nom du produit" onChange={handleInputChange} />
            </div>

            <div className="h-160 overflow-y-scroll bg-gray-50 dark:bg-gray-900 ">

            <div className="font-bold text-lg h-10 items-center text-start pl-10 grid grid-rows-1 grid-cols-3 sticky top-[0px]" style={{ backgroundColor: "white" }}>

                <p>Nom produit</p>
                <p>Marque produit</p>
                <p>Prix</p>
            </div>

                {productsList.map((product, index) => {
                    return (
                        <>
                            <div className={`hover:cursor-pointer h-10 items-center text-start pl-10 grid grid-rows-1 grid-cols-3 ${index % 2 ? "bg-gray-100 dark:bg-gray-800" : "bg-gray-200 dark:bg-gray-700"} ${index === indexSelected ? "bg-orange-100 dark:bg-gray-600" : ""}`}
                                onClick={() => {
                                    if(indexSelected === index) {
                                        setIndexSelected(null)
                                        onProductSelected(null)
                                        
                                    }else{
                                        setIndexSelected(index)
                                        onProductSelected(product)
                                    }

                                   
                                }}
                            >
                                <p>{product.name}</p>
                                <p>{product.brand_name}</p>
                                <p>{product.price} CHF</p>
                            </div>
                        </>
                    )
                })
                }
            </div>

        </>
    );
}