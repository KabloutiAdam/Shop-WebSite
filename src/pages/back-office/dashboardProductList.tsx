import ModifyProductZone from "@/components/back-office/modifyProductZone";
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
                <div className="flex align-center mt-20 flex-col">

                    {selectedProduct ? (
                        <>
                            <ModifyProductZone selectedProduct={selectedProduct} />

                        </>
                    ) : (
                        <p className="text-gray-400">Aucun produit sélectionné</p>
                    )}
                </div>


            </div>


        </>
    )

}


