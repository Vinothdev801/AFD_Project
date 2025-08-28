import { createContext, useContext } from "react";
import { useProductContext } from "./ProductContext";
import { useCartContext } from "./CartContext";


const FarmerMarketContext = createContext();

export const useFarmerMarket =  () => useContext(FarmerMarketContext);

export const FarmerMarketProvider = ({children}) => {
    const productData = useProductContext();
    const cartData = useCartContext();

    return (
        <FarmerMarketContext.Provider value={{...productData, ...cartData}}>
            {children}
        </FarmerMarketContext.Provider>
    );
}
