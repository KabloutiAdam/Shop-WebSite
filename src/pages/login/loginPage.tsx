
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "@/components/form/loginForm"
import RegisterForm from "@/components/form/registerForm"
import { useNavigate } from "react-router-dom"

import '../../App.css'

type LoginProps = {
    defaultTab?: string;
}

export default function LoginPage({ defaultTab }: LoginProps) {
    const navigate = useNavigate();
    let [tabSelected, setTabSelected] = useState(defaultTab);

    function switchTab(tabClicked: string) {

        if (tabSelected != tabClicked) {
            navigate('/' + tabClicked)
            setTabSelected(tabClicked)

        }
    }






    return (
        <>




            <div id="formContainer" className='h-[100%] flex items-center justify-center'>



                <Tabs defaultValue={tabSelected} className="w-[400px] bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 flex flex-col fixed top-50">
                    <TabsList className="self-center">
                        <TabsTrigger onClick={() => switchTab('login')} value="login">Connexion</TabsTrigger>
                        <TabsTrigger onClick={() => switchTab('register')} value="register">Créer un compte</TabsTrigger>
                    </TabsList>
                    <div className="w-full h-full mt-4">

                        {tabSelected === "login" ?
                            <TabsContent value="login" className="w-full top-0 left-0">
                                <LoginForm />
                            </TabsContent>
                            :
                            <TabsContent value="register" className="w-full top-0 left-0">

                                <RegisterForm />

                            </TabsContent>
                        }





                    </div>
                </Tabs>


            </div>
        </>
    )
}


