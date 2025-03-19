import React, { useState } from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
import MainPage from "./pages/main/mainPage"



function App() {

  const [token, setToken] = useState();

  if(true){
    return <LoginPage />
    
  }

  return (

    <>
        <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route 
                    path="/mainPage"
                    element={<MainPage />}/>
                        
                </Routes>
            </BrowserRouter>
    </>
  )
}

export default App
