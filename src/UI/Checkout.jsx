import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../Slices/OrderSlice";
import { clearCart } from "../Slices/CartSlice";

const Checkout = () => {
  const cart = useSelector((state) => state.cart?.cartItems || []);

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
  dispatch(placeOrder({ items: cart, total }));
  dispatch(clearCart());

  navigate("/address"); // ✅ THIS LINE IS MUST
};

  return (
    <div className="container">
      <h2>Checkout</h2>
      <h3>Total: ${total}</h3>

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;