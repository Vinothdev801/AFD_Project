import "./css/Cart.css"; // import css file
import { useNavigate } from "react-router-dom";
import { useFarmerMarket } from "../context/FarmerMarketContext";

const CartPage = () => {
  const navigate = useNavigate();

  const { cartItems, removeFromCart, clearCart } = useFarmerMarket();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleClick = () => {
    navigate("/farm-market/fresh");
  };

  const placeOrder = () => {
    clearCart();
    navigate("/farm-market/order");
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="title">
          <h2 className="cart-title">🛒 Your Cart</h2>
          <button onClick={handleClick} className="cart-button">
            {" "}
            {"<--"} Back to products
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-price">
                      ₹{item.price} <span>x {item.quantity}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <h3 className="cart-total">
                Total: <span>₹{totalPrice}</span>
              </h3>

              <button onClick={placeOrder} className="order-btn">PlaceOrder</button>
              <button onClick={clearCart} className="clear-btn">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
