import {createBrowserRouter, Outlet} from "react-router-dom"
import ProductList from "./pages/ProductList"
import App from './App'
import About from "./pages/About"
import Layout from "./Layout"
import Contact from "./pages/contact"
import CartPage from "./pages/Cart"
import Login from "./pages/login"
import OrderConfirmation from "./pages/OrderConfirmation"

export const router = createBrowserRouter([
  {
    path: "farm-market/",
    element: <Layout />,  
    children: [
      { index: true, path:"home", element: <App /> }, 
      { path: "fresh", element: <ProductList /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login/> },
      { path: "cart", element: <CartPage/>},
      { path: "order", element: <OrderConfirmation/>}
    ],
  },
  
]);