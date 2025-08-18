import {createBrowserRouter, Outlet} from "react-router-dom"
import ProductList from "./pages/ProductList"
import App from './App'
import About from "./pages/About"
import Layout from "./Layout"
import Contact from "./pages/contact"
import CartPage from "./pages/Cart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      { index: true, element: <App /> }, 
      { path: "fresh", element: <ProductList /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path:"/cart",
    element: <CartPage/>
  }
]);