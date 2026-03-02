import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  // ✅ correct state access
  const cart = useSelector((state) => state.cart.cartItems) || [];

  // ✅ correct total calculation
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="success-wrapper">
      <div className="success-card">
        <h1>🎉 Order Placed Successfully!</h1>

        <p>Your order has been confirmed</p>
        <p>Total Amount: ${total.toFixed(2)}</p>

        <button onClick={() => navigate("/tracking")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;