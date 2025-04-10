import { productInterface } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";




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

    const handleInputChange = (event: any) => {
        setQuery(event.target.value);
    };

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

            {isModifying ?
                <>
                    <input value={selectedProduct.name} type="text" />
                    <input value={selectedProduct.price} type="text" />
                    <div className="w-full relative">


                        <input
                            onChange={handleInputChange}
                            onSelect={() => setIsBrandDropdownDisplayed(true)}
                            onBlur={() => setIsBrandDropdownDisplayed(false)}
                            defaultValue={selectedProduct.brand_name}
                            className="self-start w-full pl-5"
                        />

                        <div className="max-h-50 w-full text-start pl-5 bg-white overflow-y-scroll top-full absolute">
                            {isBrandDropdownDisplayed &&

                                brandList.map((brand) => {
                                    return (
                                        <>

                                            <p>{brand.name}</p>


                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <input type="text" />
                </>
                :
                <>
                    <p className="mt-4 font-semibold">{selectedProduct.name}</p>
                    <p>{selectedProduct.brand_name}</p>
                    <p>{selectedProduct.price} CHF</p>
                </>


            }


        </>
    )

}
