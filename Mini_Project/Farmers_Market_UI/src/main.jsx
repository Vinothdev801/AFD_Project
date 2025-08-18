import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import Navbar from './components/Navigation/Navgation.jsx'
import { CartProvider } from './CartContext.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    
      {/* <Navbar/> */}
      {/* <App/> */}
    {/* </RouterProvider> */}
  </StrictMode>,
)
