import React, { useEffect, useState } from "react"

import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
import MainPage from "./pages/main/mainPage"
import { AuthProvider } from "./server/authContext";
import { useAuth } from "./server/authContext";
import ItemPage from "./pages/itemPage";



function App() {



  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isUserConnected } = useAuth();
    return isUserConnected ? <>{children}</> : <Navigate to="/login" />;
  }


  const { isUserConnected } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isUserConnected) {
      navigate('/login')
    }
  }, [])

  return (

    
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/mainPage" element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>} />
        
        <Route path="/:category/:tag" element={<ItemPage />} />
      </Routes>
   




  )



}

export default App
