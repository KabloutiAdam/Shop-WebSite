
import { productInterface } from "@/interfaces"
import { useEffect, useState } from "react"

import { Link, useNavigate } from "react-router-dom"


export default function ProductCard({ product }: { product: productInterface }) {

    const navigate = useNavigate()

    const onCardClick = () => {
        navigate(`/${product.category_name}/${product.item_name}/${product.id}`)
    }

    const [toCartNumber, setToCartNumber] = useState(0)
    const [overCard, setOverCard] = useState(true)





    function addProductToChart() {
        if (toCartNumber > 0) {
            var cartValue = get()
            if (cartValue == null) {
                createLocalStorage()
                cartValue = get()
                // @ts-ignore
                var values = JSON.parse(cartValue)
                product.quantity = toCartNumber
                values.products.push(product)
                localStorage.setItem('cartList', JSON.stringify(values))
            }
            else {
                var values = JSON.parse(cartValue)
                



                const existingProductIndex = values.products.findIndex(
                    (item: any) => item.id === product.id
                );
                if (existingProductIndex >= 0) {
                    var newQuantity = values.products[existingProductIndex].quantity + toCartNumber
                    values.products[existingProductIndex].quantity = newQuantity
                } else {
                    product.quantity = toCartNumber
                    values.products.push(product)
                }
                
                localStorage.setItem('cartList', JSON.stringify(values))



            }
            window.dispatchEvent(new Event('cartUpdated'))
        }





    }

    function createLocalStorage() {
        localStorage.setItem('cartList', JSON.stringify({ products: [] }))
    }

    function get() {
        return localStorage.getItem('cartList')
    }

    return (
        <div onClick={() => onCardClick()}>
            <div className="h-full mb-12 p-4 border-orange-300 border-r hover:cursor-pointer">



                <div className={`h-full w-full p-4 rounded-2xl duration-100 flex flex-col justify-between items-center hover:shadow-lg ${overCard ? "hover:bg-orange-50" : ""} `}>
                    <div className="w-[80%] h-[80%] flex justify-center">
                        <img className="w-auto object-contain" src={"../../../images/productImages/" + product.image_link} alt="" />

                    </div>
                    <div className="w-full mt-8 grid grid-cols-3 grid-rows-3 ">

                        <p className="grid col-span-2 col-start-1 font-bold text-left pb-3">{product.name}</p>
                        <p className="grid col-span-1 col-start-3 italic text-gray-400">{product.brand_name}</p>
                        <p className="grid col-span-2 col-start-1 row-span-2 row-start-2 text-left">{product.description}</p>
                        <p className="grid col-span-1 col-start-3 row-span-1 row-start-3 text-right font-bold text-red-600 pr-5">{product.price} CHF</p>
                        <div
                            className="flex items-center pt-3 pb-3 flex-row col-span-1 col-start-1 row-span-1 row-start-3 text-left"
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => e.stopPropagation()}
                            onMouseEnter={() => setOverCard(false)}
                            onMouseLeave={() => setOverCard(true)}>
                            <button
                                disabled={toCartNumber > 0 ? false : true}
                                onClick={() => setToCartNumber(toCartNumber - 1)}
                                className={`flex p-3 items-center justify-center w-8 h-8 border border-gray-400 hover:bg-gray-200 ${toCartNumber == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}>-</button>
                            <input value={toCartNumber} onChange={(e) => setToCartNumber(Number(e.target.value))} className="flex text-center items-center justify-center w-10 h-8 border-t border-b border-gray-400" />
                            <button
                                onClick={() => setToCartNumber(toCartNumber + 1)}
                                className="flex p-3 items-center justify-center w-8 h-8 border border-gray-400 cursor-pointer hover:bg-gray-200">+</button>
                            <img
                                className={`w-[32px] h-[32px] ml-3 rounded-2xl hover:bg-gray-200 ${toCartNumber == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                                src="../../../../images/logos/panier.png"
                                alt=""
                                onClick={() => addProductToChart()} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
