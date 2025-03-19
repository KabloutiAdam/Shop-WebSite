import React, { useState } from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
import MainPage from "./pages/main/mainPage"



function App() {

  const [token, setToken] = useState();
  const [userConnected, setUserConnected] = useState(false);

  if (!userConnected) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    )

  }

  return (

    <>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/mainPage"
            element={<MainPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
