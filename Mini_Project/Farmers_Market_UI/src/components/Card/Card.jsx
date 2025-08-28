import React from "react";
import "./Card.css";
import { useState } from "react";
import { useFarmerMarket } from "../../context/FarmerMarketContext";

const Card = ({ imagePath, price, count, title, cardId }) => {
  const { addToCart } = useFarmerMarket();
  const [message, setMessage] = useState("");

  const handleClick = () => {
    addToCart({ id: cardId, title, price, imagePath });

    setMessage(`${title} added to cart ✅`);

    // hide after 5 seconds
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="card-container flex-col box-shadow">
      <div className="flex center">
        <img className="img" src={imagePath} alt="card-image" />
      </div>
      <div className="text-container flex-col align-left">
        <p>{title}</p>
        {price && (
          <p>
            {count} &nbsp;₹ {price}{" "}
          </p>
        )}
      </div>
      <div className="flex center">
        <button className="btn" onClick={() => handleClick(cardId)}>
          Add to cart
        </button>
      </div>
      {/* message */}
      {message && (
        <p className="text-green-600 mt-2 text-sm fade-in">{message}</p>
      )}
    </div>
  );
};

export default Card;
