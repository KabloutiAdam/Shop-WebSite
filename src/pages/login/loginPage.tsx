

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "@/components/form/loginForm"
import RegisterForm from "@/components/form/registerForm"

import '../../App.css'


function LoginPage() {


    return (
        <>
            <Tabs defaultValue="login" className="w-[400px] bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 flex flex-col fixed top-50">
                <TabsList className="self-center">
                    <TabsTrigger value="login">Connexion</TabsTrigger>
                    <TabsTrigger value="register">Créer un compte</TabsTrigger>
                </TabsList>
                <div className="w-full h-full mt-4">
                    <TabsContent value="login" className="w-full top-0 left-0">
                        <LoginForm />
                    </TabsContent>
                    <TabsContent value="register" className="w-full top-0 left-0">
                        <RegisterForm />
                    </TabsContent>
                </div>
            </Tabs>


        </>
    )
}

export default LoginPage
