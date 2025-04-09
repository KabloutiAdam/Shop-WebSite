import { useEffect } from "react"

import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
import MainPage from "./pages/main/mainPage"

import ItemPage from "./pages/itemPage";
import ItemDetailsPage from "./pages/itemDetailsPage";
import SearchPage from "./pages/searchPage";
import ProtectedRoute from "./components/routesProtection/ProtectedRoute";
import { useAuth } from "./components/authProvider";
import DashboardMainPage from "./pages/back-office/dashboardMainPage";




function App() {

  const { currentUser, isLoading } = useAuth()


  // const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //   const { isUserConnected } = useAuth();
  //   return isUserConnected ? <>{children}</> : <Navigate to="/login" />;
  // }

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }


  if (isLoading) {
    return <div>ddsdsd...</div>;
  }




  return (
    <>
      <ScrollToTop />

      

      <Routes>
        <Route path="/login" element={
          currentUser ? <Navigate to="/mainPage" /> : <LoginPage defaultTab="login" />} />
        <Route path="/register" element={<LoginPage defaultTab="register" />} />
        <Route path="/mainPage" element={
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <MainPage />
          </ProtectedRoute>} />
        <Route path="/search" element={
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <SearchPage />
          </ProtectedRoute>} />

        <Route path="/:category/:tag" element={
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <ItemPage />
          </ProtectedRoute>} />

        <Route path="/:category" element={
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <ItemPage />
          </ProtectedRoute>} />

        <Route path="/:category/:tag/:id" element={
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <ItemDetailsPage />
          </ProtectedRoute>} />

        <Route path="/admin-dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <DashboardMainPage />
          </ProtectedRoute>
        }

        />



        {/* Route par défaut lorsqu'un URL non définie est entré dans le navigateur */}
        <Route
          path="*"
          element={
            currentUser
              ? <Navigate to="/mainPage" />
              : <Navigate to="/login" />
          }
        />
      </Routes>
    </>



  )



}

export default App
