import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tabs defaultValue="account" className="justify-self-center self-center h-[100%] w-[400px] bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <TabsList className='self-center'>
          <TabsTrigger value="account">Connexion</TabsTrigger>
          <TabsTrigger value="password">Créer un compte</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      
    </>
  )
}

export default App
