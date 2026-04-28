import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css"
import MainContent from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContent />
  </StrictMode>,
)
