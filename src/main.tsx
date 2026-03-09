
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./stylesheets/stylesheet_2.css"
import "./stylesheets/stylesheet_1.css"
import App from './App.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
   