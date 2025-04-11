import { productInterface } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "../formItems/button";




type Props = {
    selectedProduct: productInterface;
}






export default function ModifyProductZone({ selectedProduct }: Props) {

    const [isModifying, setIsModifying] = useState<boolean>(false);

    const [query, setQuery] = useState(selectedProduct.brand_name)

    const [brandList, setBrandList] = useState<productInterface[]>([]);
    // @ts-ignore
    const [loading, setLoading] = useState(true);
    // @ts-ignore
    const [noResult, setNoResult] = useState(false)

    const [isBrandDropdownDisplayed, setIsBrandDropdownDisplayed] = useState<boolean>(false);

    const [brandSelected, setBrandSelected] = useState<string>(selectedProduct.brand_name)

    const [productNameInput, setProductNameInput] = useState<string>(selectedProduct.name)
    const [productPriceInput, setProductPriceInput] = useState<number>(selectedProduct.price)



    useEffect(() => {
        const fetchFilteredProducts = async () => {
            setLoading(true)
            setNoResult(false)
            if (query.length > 0) {
                try {

                    const res = await axios.get("/api/brand", {
                        params: { query },
                    });


                    setBrandList(res.data);
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


                const res = await axios.get("/api/brand");
                setBrandList(res.data);
                setLoading(false)
            }


        }

        fetchFilteredProducts()


    }, [selectedProduct, query]);


    useEffect(() => {
        setIsBrandDropdownDisplayed(false)
        setIsModifying(false)
        setBrandSelected(selectedProduct.brand_name)
        setProductNameInput(selectedProduct.name)
        setProductPriceInput(selectedProduct.price)
   
        setQuery(selectedProduct.brand_name)

    }, [selectedProduct])

    const handleInputChange = (event: any) => {
        setQuery(event.target.value);
        setBrandSelected(event.target.value);

    };

    const handleNameInputChange = (event: any) => {
        setProductNameInput(event.target.value);
       
    };

    const handlePriceInputChange = (event: any) => {
        setProductPriceInput(event.target.value);
       
    };

    const updateProduct = async () =>{
        try {
            const res = await axios.put(`/api/products/updateProduct/${selectedProduct.id}`, {
                name: productNameInput,   
                price: productPriceInput,
                brand_name: brandSelected,
            });
    
        
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
            
        }

    }

    return (

        <>
            <div className="w-full flex justify-end mb-3 pr-10">
                <div className="p-2 rounded-md border-1 hover:cursor-pointer border-white hover:border-gray-300"
                    onClick={() => { setIsModifying(!isModifying) }}
                >
                    <img className="" src="/public/images/logos/editer.png" alt="" />
                </div>

            </div>
            <img
                className="max-w-full max-h-64 object-contain border rounded-xl"
                src={`../../../images/productImages/${selectedProduct.image_link}`}
                alt={selectedProduct.name}
            />

            <div className="w-full flex flex-col  items-start pl-4 mt-5">
                {isModifying ?
                    <>
                        <input
                            className="self-start w-80 pl-5 border-black border-1 rounded-md mt-3 focus:border-blue-700 focus:ring-1 focus:ring-blue-300 outline-none transition-all duration-100"
                            defaultValue={selectedProduct.name}
                            onChange={handleNameInputChange}
                            value={productNameInput}
                            type="text"
                            placeholder="Nom de l'article"
                        />
                        <input
                            className="self-start w-50 pl-5 border-black border-1 rounded-md mt-3 focus:border-blue-700 focus:ring-1 focus:ring-blue-300 outline-none transition-all duration-100"
                            defaultValue={selectedProduct.price}
                            onChange={handlePriceInputChange}
                            value={productPriceInput}
                            type="text"
                            placeholder="Prix"
                        />
                        <div className="w-full relative flex">


                            <input
                                onChange={handleInputChange}
                                onSelect={() => setIsBrandDropdownDisplayed(true)}
                                onBlur={() => setTimeout(() => setIsBrandDropdownDisplayed(false), 100)}
                                defaultValue={selectedProduct.brand_name}
                                className="self-start w-50 pl-5 border-black border-1 rounded-md mt-3 focus:border-blue-700 focus:ring-1 focus:ring-blue-300 outline-none transition-all duration-100"
                                value={brandSelected}
                                placeholder="Marque"

                            />

                            <div className="max-h-40 mt-1 w-full text-start pl-5 bg-white overflow-y-scroll top-full absolute">
                                {isBrandDropdownDisplayed &&

                                    brandList.map((brand) => {
                                        return (
                                            <>
                                                <div
                                                    onClick={() => { setBrandSelected(brand.name) }}
                                                >
                                                    <p>
                                                        {brand.name}
                                                    </p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>


                    </>
                    :
                    <>
                        <p className="mt-3 border-white border-1 font-semibold">{selectedProduct.name}</p>
                        <p className="mt-3 border-white border-1 font-semibold">{selectedProduct.brand_name}</p>
                        <p className="mt-3 border-white border-1 font-semibold">{selectedProduct.price} CHF</p>
                    </>


                }
            </div>

            {isModifying &&
                <div className="w-full flex justify-end mt-3">
                    <Button
                        className="w-50 border-1 mr-3 rounded-md mt-3 hover:cursor-pointer hover:bg-gray-700"
                        onClick={updateProduct}
                    >
                        Valider les changements
                    </Button>
                </div>


            }

        </>
    )

}
