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
import DashboardStats from "./pages/back-office/dashboardStats";
import DashboardSettings from "./pages/back-office/dashboardSettings";
import DashboardProductList from "./pages/back-office/dashboardProductList";




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
    return <div>Loading...</div>;
  }




  return (
    <>
      <ScrollToTop />



      <Routes>
        <Route path="/login" element={
          currentUser !== null && currentUser !== undefined ? <Navigate to="/mainPage" /> : <LoginPage defaultTab="login" />} />
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
        }>
          
          <Route path="statistiques" element={<DashboardStats />} />
          <Route path="parametres" element={<DashboardSettings />} />
          <Route path="produits" element={<DashboardProductList />} />
          <Route path="ajouter-produit" element={<DashboardStats />} />
          <Route path="categories" element={<DashboardStats />} />
          <Route path="ajouter-categorie" element={<DashboardStats />} />
          <Route path="promotions" element={<DashboardStats />} />
          <Route path="ajouter-promotion" element={<DashboardStats />} />
          <Route path="clients" element={<DashboardStats />} />
          <Route path="commandes" element={<DashboardStats />} />
         

        </Route>




        <Route path="/admin-dashboard/:page" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <DashboardMainPage />
          </ProtectedRoute>
        }

        />




        {/* Route par défaut lorsqu'un URL non définie est entré dans le navigateur */}

        <Route
          path="*"
          element={
            currentUser !== null && currentUser !== undefined
              ? <Navigate to="/mainPage" />
              : <Navigate to="/login" />
          }
        />
      </Routes>
    </>



  )



}

export default App
