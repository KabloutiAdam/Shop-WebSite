
import { Input } from "../formItems/input"
import { Button } from "../formItems/button"


function RegisterForm() {

    return (
        <>
            <div className="grid w-full gap-3 mt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="lastname" className="justify-self-start ml-2">Nom</label>
                    <Input id="lastname" type="text" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="firstname" className="justify-self-start ml-2">Prénom</label>
                    <Input id="firstname" type="text" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Email</label>
                    <Input id="email" type="email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Mot de passe</label>
                    <Input id="password" type="password" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="email" className="justify-self-start ml-2">Confirmer mot de passe</label>
                    <Input id="passwordConfirm" type="password" />
                </div>

                <Button className="hover:cursor-pointer">Valider</Button>
            </div>

        </>
    )
}


export default RegisterForm