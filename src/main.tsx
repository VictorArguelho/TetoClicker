import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { PointsProvider } from '@context/PointsContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PointsProvider>
      <App />
    </PointsProvider>
  </StrictMode>,
)
