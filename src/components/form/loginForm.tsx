
import { Input } from "../formItems/input"
import { Button } from "../formItems/button"
import { useAuth } from "../authProvider";

import "../../index.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {

    const { handleLogin } = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [shake, setShake] = useState(false);


    const login = async () => {
        // Simuler un appel API


        const message = await handleLogin(email, password);
        if (message == null) {
            navigate("/mainPage");
            setErrorMessage("");
        }else{

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
                                    login()
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
                                    login()
                                }
                            }
                        }
                    />
                </div>

                <p className="text-red-600 font-bold">{errorMessage}</p>

                <Button
                    className="bg-black text-white hover:cursor-pointer"
                    onClick={login}>Valider</Button>
            </div>




        </>
    )
}


export default LoginForm