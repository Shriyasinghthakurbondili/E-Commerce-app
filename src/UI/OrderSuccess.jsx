import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  // get total from order slice
  const total = useSelector((state) => state.orders?.total) || 0;

  return (
    <div className="success-wrapper">
      <div className="success-card">
        <h1>🎉 Order Placed Successfully!</h1>

        <p>Your order has been confirmed</p>
        {/* <p>Total Amount: ${total.toFixed(2)}</p> */}

        <button onClick={() => navigate("/products")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;