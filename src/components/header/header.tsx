
import SearchBar from "../searchBar/searchBar";

import { useAuth } from "@/context/authContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../formItems/button";
import { useEffect, useState } from "react";
import { productInterface } from "@/interfaces";




export default function Header() {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const [numberProductInCart, setNumberProductInCart] = useState(0)


    const updateCartCount = () => {
       
        var cartValue = get()
        if (cartValue != null) {
            var values = JSON.parse(cartValue)
            var totalCart = 0
            values.products.forEach((element: productInterface) => {
                

                totalCart += element.quantity
                
            });

            setNumberProductInCart(totalCart)
        }

       
    }

    useEffect(() => {

        window.addEventListener('cartUpdated', updateCartCount)


        return () => {
            window.removeEventListener('cartUpdated', updateCartCount)
        }

       




    }, [])

    function get() {
        return localStorage.getItem('cartList')
    }

    const handleLogout = async () => {
        logout()
        navigate("/login")
    }


    return (

        <div className=" sticky top-0 w-full bg-white h-22 border shadow-md grid grid-cols-4 grid-rows-1 gap-4 p-4" >
            <div className="flex items-center pl-12">
                <img className="w h-full " src="../../../images/siteLogo.png" alt="" />
                <h2 className=" text-orange-500 font-medium">ShopSuperCool</h2>
            </div>
            <div className="col-start-2 col-span-2 ">
                <SearchBar />
            </div>
            <div className="flex justify-around items-center ">
                <Button className="hover:cursor-pointer" onClick={handleLogout}>Se déconnecter</Button>
                <div className="relative">
                    <img src="../../../../images/logos/panier.png" alt="" />
                    <p className="absolute left-0">{numberProductInCart > 0 ? numberProductInCart : ""}</p>
                </div>
               
            </div>


        </div>



    )
}


