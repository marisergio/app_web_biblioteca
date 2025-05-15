import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LivroProvider } from './contexts/LivroContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LivroProvider >
    <App />
    </LivroProvider>
  </StrictMode>,
)
