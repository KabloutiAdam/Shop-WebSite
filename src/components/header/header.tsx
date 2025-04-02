
import SearchBar from "../searchBar/searchBar";
import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "../formItems/button";
import { useEffect, useState } from "react";
import { productInterface } from "@/interfaces";
import CartListDropdown from "./cartListDropdown";




export default function Header() {
    const { handleLogout } = useAuth()
    const navigate = useNavigate()
    const [numberProductInCart, setNumberProductInCart] = useState(0)
    const [showCartList, setShowCartList] = useState(false)

    const {currentUser} = useAuth()
    


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
    window.addEventListener('cartUpdated', updateCartCount)





    useEffect(() => {

        updateCartCount()

        window.addEventListener('cartUpdated', updateCartCount)


        return () => {
            window.removeEventListener('cartUpdated', updateCartCount)
        }






    }, [])

    function get() {
        return localStorage.getItem('cartList')
    }

    const Logout = async () => {
        handleLogout()
        navigate("/login")
    }

    const ToggleCartDropdown = () => {
        setShowCartList((prev) => !prev)

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
            <div className="flex justify-around items-center">
                <Button className="hover:cursor-pointer" onClick={Logout}>
                    Se déconnecter
                </Button>
                
                { 
                    currentUser ? 
                    currentUser.role === 'admin' &&
                    <Button className="hover:cursor-pointer" onClick={() => navigate("/admin-dashboard")}>
                        Admin Dashboard
                    </Button>
                    :
                    ""
                }
               

                <div
                    className="relative w-16 h-13 group flex items-center justify-center rounded-2xl hover:cursor-pointer duration-200 "
                    onClick={ToggleCartDropdown}
                >
                    <div className="bg-black group-hover:bg-amber-500 w-10 h-10" style={{ maskImage: `url(../../../../images/logos/panier.svg)`, WebkitMaskImage: `url(../../../../images/logos/panier.svg)` }} />





                    {numberProductInCart > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                            {numberProductInCart}
                        </span>
                    )}
                </div>

                {<CartListDropdown isDropdownOpen={showCartList} />}

            </div>


        </div>



    )
}


