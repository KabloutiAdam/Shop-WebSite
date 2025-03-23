
import { Input } from "../formItems/input"
import { Button } from "../formItems/button"
import { useAuth } from "@/context/authContext"
import "../../index.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [shake, setShake] = useState(false);


    const handleLogin = async () => {
        // Simuler un appel API
        if (email === "test" && password === "password") {
            const fakeToken = "123456789";
            login(fakeToken);
            navigate("/mainPage");
            setErrorMessage("");
        } else {
            
            setErrorMessage("Identifiants invalides");
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <>

            <div className="grid w-full gap-5 mt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Email</label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={
                            (e) => {
                                if (e.key === "Enter") {
                                    handleLogin()
                                }
                            }
                        }
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Mot de passe</label>
                    <Input
                        className={`${shake ? 'animate-shake border-red-500' : ''} transition-all duration-300`}
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={
                            (e) => {
                                if (e.key === "Enter") {
                                    handleLogin()
                                }
                            }
                        }
                    />
                </div>

                <p className="text-red-600 font-bold">{errorMessage}</p>

                <Button
                    className="bg-black text-white hover:cursor-pointer"
                    onClick={handleLogin}>Valider</Button>
            </div>




        </>
    )
}


export default LoginForm