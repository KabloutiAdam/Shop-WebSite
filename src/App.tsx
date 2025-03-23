import React, { useEffect, useState } from "react"

import { BrowserRouter, Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
import MainPage from "./pages/main/mainPage"
import { AuthProvider } from "./context/authContext";
import { useAuth } from "./context/authContext";
import ItemPage from "./pages/itemPage";
import ItemDetailsPage from "./pages/itemDetailsPage";



function App() {



  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isUserConnected } = useAuth();
    return isUserConnected ? <>{children}</> : <Navigate to="/login" />;
  }

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }



 

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/mainPage" element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>} />

        <Route path="/:category/:tag" element={
          <ProtectedRoute>
            <ItemPage />
          </ProtectedRoute>} />
          
        <Route path="/:category/:tag/:id" element={
          <ProtectedRoute>
            <ItemDetailsPage />
          </ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>



  )



}

export default App
