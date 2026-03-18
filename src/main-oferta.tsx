import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppOferta from './AppOferta.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppOferta />
  </StrictMode>,
)
