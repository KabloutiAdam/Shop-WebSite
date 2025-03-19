
import { Input } from "../formItems/input"
import { Button } from "../formItems/button"
import { useAuth } from "@/server/authContext"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        // Simuler un appel API (remplace ceci par un vrai appel)
        if (email === "test" && password === "password") {
            const fakeToken = "123456789";
            login(fakeToken);
            navigate("/mainPage");
        } else {
            alert("Identifiants incorrects !");
        }
    };

    return (
        <>

            <div className="grid w-full gap-8 mt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Email</label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Mot de passe</label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Button className="hover:cursor-pointer" onClick={handleLogin}>Valider</Button>
            </div>




        </>
    )
}


export default LoginForm