import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/OrderConfirmation.css"; // optional CSS file

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate("/farm-market/fresh");
  };

  return (
    <div className="order-confirmation">
      <h1>🎉 Thank you for your order!</h1>
      <p>Your order has been placed successfully.</p>
      <button onClick={handleBackToShop} className="back-button">
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmation;
