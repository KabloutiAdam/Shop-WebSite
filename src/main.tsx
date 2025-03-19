import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/loginPage.tsx'
import App from './App.tsx'
import { AuthProvider, useAuth } from "@/server/authContext.tsx";
import { useNavigate } from 'react-router-dom'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
