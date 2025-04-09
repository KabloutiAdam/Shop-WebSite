import ProductChart from "@/components/back-office/productChart";
import { productInterface } from "@/interfaces";
import { useState } from "react";


export default function DashboardProductList() {

    const [selectedProduct, setSelectedProduct] = useState<productInterface | null>(null);

    return (

        <>

            <div className="w-full h-[7%] mb-3">
                <p className="text-start pl-5 pt-3 text-2xl font-bold">Liste des produits</p>
            </div>

            {/*  Chart Container    */}
            <div className="w-full h-[80%] border grid grid-cols-[5fr_2fr]">
                <div className="col-span-1">
                    <ProductChart onProductSelected={setSelectedProduct} />
                </div>
                <div className="flex align-center justify-center flex-col">
                    {selectedProduct ? (
                        <>
                            <img
                                className="max-w-full max-h-64 object-contain border rounded-xl"
                                src={`../../../images/productImages/${selectedProduct.image_link}`}
                                alt={selectedProduct.name}
                            />
                            <p className="mt-4 font-semibold">{selectedProduct.name}</p>
                            <p>{selectedProduct.brand_name}</p>
                            <p>{selectedProduct.price} CHF</p>
                        </>
                    ) : (
                        <p className="text-gray-400">Aucun produit sélectionné</p>
                    )}
                </div>


            </div>


        </>
    )

}


