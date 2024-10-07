import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersApp } from './UsersApp'
import './styles.css'
import { Contador } from './components/Contador'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contador />
  </StrictMode>,
)
