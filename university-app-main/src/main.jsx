import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Temp from "./temp.tsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Temp />
    </App>
  </StrictMode>,
)
