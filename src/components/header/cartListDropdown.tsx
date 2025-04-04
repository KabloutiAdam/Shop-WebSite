import { useEffect, useState } from "react";
import { Button } from "../formItems/button";
import { productInterface } from "@/interfaces";


type Props = {
    isDropdownOpen: boolean;
};


export default function CartListDropdown({ isDropdownOpen }: Props) {

    const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>()

    useEffect(() => {
        window.addEventListener('cartUpdated', newProductInCart)

        const productsInCart = localStorage.getItem("cartList");
        if (!productsInCart) {
            setIsCartEmpty(true);
            setCartItems([]);
            return;
        }

        try {
            const parsedCart = JSON.parse(productsInCart);
            if (parsedCart.products && parsedCart.products.length > 0) {
                setIsCartEmpty(false);
                setCartItems(parsedCart.products);
                updateTotalPrice(cartItems)

            } else {
                setIsCartEmpty(true);
            }
        } catch (error) {
            console.error("Erreur de parsing du panier :", error);
            setIsCartEmpty(true);
        }


    }, [isDropdownOpen])


    const newProductInCart = () => {
        const productsInCart = localStorage.getItem("cartList");
        if (!productsInCart) {
            setIsCartEmpty(true);
            setCartItems([]);
        }

        try {
            // @ts-ignore
            const parsed = JSON.parse(productsInCart);
            if (parsed.products && parsed.products.length > 0) {
                setIsCartEmpty(false);
                setCartItems(parsed.products);
                updateTotalPrice(parsed.products);
            } else {
                setIsCartEmpty(true);
                setCartItems([]);
            }
        } catch (err) {
            setIsCartEmpty(true);
            setCartItems([]);
        }
    }


    const setCartAndSyncStorage = (items: any[]) => {
        setCartItems(items);
        localStorage.setItem("cartList", JSON.stringify({ products: items }));
        updateTotalPrice(items)
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const updateQuantityItem = (quantity: number, index: number) => {
        const updated = [...cartItems];
        updated[index].quantity = quantity < 0 ? 0 : quantity;
        setCartAndSyncStorage(updated);

    };

    const handleManualQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

        const value = parseInt(e.target.value);

        if (!isNaN(value) && value >= 0 && checkMaxValue(value)) {
            updateQuantityItem(5, index);
        }

        if (!isNaN(value) && value >= 0) {
            updateQuantityItem(value, index);
        }
    };

    const updateTotalPrice = (items: any[]) => {
        let total = 0
        items.forEach(element => {
            total += (element.quantity * element.price)
        });
        setTotalPrice(total)
    }

    const checkMaxValue = (value: number) => {
        return value > 5

    }

    const deleteProductFromCart = (item: productInterface) => {
        const cart = localStorage.getItem("cartList");
        if (!cart) return;
        try {
            const parsed = JSON.parse(cart);
        
            const updatedProducts = parsed.products.filter((product: any) => product.id !== item.id);
        
            
            localStorage.setItem("cartList", JSON.stringify({ products: updatedProducts }));
        
           
            setCartItems(updatedProducts);
            updateTotalPrice(updatedProducts);
        
            
            window.dispatchEvent(new Event("cartUpdated"));
          } catch (error) {
            console.error("Erreur lors de la suppression :", error);
          }
    }


    return (

        <div className={`absolute duration-400 overflow-y-scroll shadow-md rounded-lg border-gray-300 right-3 top-21 w-140 bg-white ${isDropdownOpen ? " border h-100" : "h-0"}`}>

            {isCartEmpty ?
                <p>Votre panier est vide</p>

                :
                (<>
                    <div className="p-4 space-y-3">
                        {cartItems.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="flex justify-between items-center border-b pb-2"
                            >
                                <img className="w-25 ml-10" src={"/images/productImages/" + item.image_link} alt="" />
                                <div className="w-[50%] flex flex-col items-start">
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <div className="w-full flex justify-between items-center">
                                        <div
                                            className="flex items-center pt-3 pb-3 flex-row col-span-1 col-start-1 row-span-1 row-start-3 text-left"
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => e.stopPropagation()}
                                        >
                                            <button
                                                disabled={item.quantity == 1}
                                                onClick={() => updateQuantityItem(item.quantity - 1, index)}
                                                className={`flex p-3 items-center justify-center w-8 h-8 border border-gray-400 hover:bg-gray-200 ${item.quantity == 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>-</button>
                                            <input
                                                value={item.quantity}
                                                className="flex text-center items-center justify-center w-10 h-8 border-t border-b border-gray-400"
                                                onChange={(e) => handleManualQuantityChange(e, index)}
                                            />
                                            <button
                                                disabled={item.quantity == 5}
                                                onClick={() => updateQuantityItem(item.quantity + 1, index)}
                                                className={`flex p-3 items-center justify-center w-8 h-8 border border-gray-400 hover:bg-gray-200 ${item.quantity == 5 ? "cursor-not-allowed" : "cursor-pointer"}`}>+</button>

                                        </div>
                                        <div 
                                            onClick={() => deleteProductFromCart(item)}
                                            className="bg-black hover:cursor-pointer hover:bg-amber-500 w-8 h-8 mr-8" style={{ maskImage: `url(../../../images/logos/bin.svg)`, WebkitMaskImage: `url(../../../images/logos/bin.svg)` }} />
                                    </div>
                                    <p className="text-red-600 font-bold self-end">
                                        {(item.price * item.quantity).toFixed(2)} CHF
                                    </p>
                                </div>
                            </div>
                        ))}




                    </div>
                    <div className=" bottom-0 sticky h-14 flex items-center pl-12 bg-white w-full justify-between">
                        <Button> Passer au paiement</Button>
                        <p className="text-red-600 font-bold">Total du panier : {totalPrice?.toFixed(2)}</p>
                    </div>


                </>


                )

            }
        </div>
    )
}