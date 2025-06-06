

import { productInterface } from "@/interfaces"

import { Link } from "react-router-dom"


export default function PreviewCard({ product }: { product: productInterface }) {

        
    return (
        <Link to={`/${product.category_name}/${product.item_name}/${product.id}`}>
            <div className="w-[100%] h-44 p-4a hover:cursor-pointer">



                <div className="h-full w-full  rounded-2xl duration-100 flex flex-row justify-between items-center hover:shadow-lg hover:bg-orange-50">
                    <div className="w-[80%] h-[80%] flex justify-center">
                        <img className="w-auto object-contain" src={"/images/productImages/" + product.image_link} alt="" />

                    </div>
                    <div className="w-full mt-8 grid grid-cols-3 grid-rows-3 ">

                        <p className="grid col-span-2 col-start-1 font-bold text-left pb-3">{product.name}</p>
                        <p className="grid col-span-1 col-start-3 italic text-gray-400">{product.brand_name}</p>
                        <p className="grid col-span-2 col-start-1 row-span-2 row-start-2 text-left">{product.description}</p>
                        <p className="grid col-span-1 col-start-3 row-span-1 row-start-3 text-right font-bold text-red-600 pr-5">{product.price} CHF</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}
