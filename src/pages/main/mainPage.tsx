import React from "react";
import { Button } from "@/components/formItems/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/server/authContext";




export default function MainPage(){

    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        logout()
        navigate("/login")
    }

    return(
        <>
            <p>Main Page</p>

          <Button className="hover:cursor-pointer" onClick={handleLogout}>Valider</Button>
        </>
    )
}

