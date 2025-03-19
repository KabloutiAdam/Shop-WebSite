import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoginPage from './pages/login/loginPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div id="formContainer" className='h-[100%] flex items-center justify-center'>
      <LoginPage />
    </div>
    
  </StrictMode>,
)
