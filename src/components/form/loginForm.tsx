
import { Input } from "../formItems/input"
import { Button } from "../formItems/button"
import useAuth from "@/server/auth"


export function LoginForm() {

    return (
        <>

            <div className="grid w-full gap-8 mt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Email</label>
                    <Input id="email" type="email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Mot de passe</label>
                    <Input id="password" type="password" />
                </div>

                <Button className="hover:cursor-pointer" onClick={() => useAuth()}>Valider</Button>
            </div>




        </>
    )
}


export default LoginForm