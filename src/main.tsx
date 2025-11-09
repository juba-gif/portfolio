import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greet from './Greeting.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<Greet />

  </StrictMode>,
)
