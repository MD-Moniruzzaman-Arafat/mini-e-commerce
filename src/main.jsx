import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import CartContextProvider from './Context/CartContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </CartContextProvider>
)
