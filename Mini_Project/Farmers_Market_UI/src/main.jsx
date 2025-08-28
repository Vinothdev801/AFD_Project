import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import { FarmerMarketProvider } from "./context/FarmerMarketContext.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FarmerMarketProvider>
      <RouterProvider router={router} />
    </FarmerMarketProvider>
      
    
  </StrictMode>
);
