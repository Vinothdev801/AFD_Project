import React, { useState } from "react";



export const useCartContext = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {

    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return prev.map((cartItem) => cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Remove item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items
  const clearCart = () => setCartItems([]);

  return { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    clearCart 
  }
};
