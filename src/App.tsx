import React, { useState } from "react"

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
import MainPage from "./pages/main/mainPage"
import { AuthProvider } from "./authContext";
import { useAuth } from "./authContext";



function App() {



  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isUserConnected } = useAuth();
    return isUserConnected ? <>{children}</> : <Navigate to="/login" />;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
          <Route path="/mainPage" element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>


  )



}

export default App
