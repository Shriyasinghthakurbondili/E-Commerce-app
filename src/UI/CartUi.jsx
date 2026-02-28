import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {selectCartItems, removeFromCart, increaseQty, decreaseQty} from "../Slices/CartSlice";
const CartUi = () => {
  const cart = useSelector(selectCartItems) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fixed (was using wrong variable "items")
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return(
    <div className="container">
      <h1>🛒 Your Cart</h1>
      {/* Empty cart */}
      {cart.length === 0 ?(
        <div className="status">
          <h2>Cart is empty 😢</h2>
          <button onClick={()=>navigate("/products")}>🛍 Go Shopping</button>

        </div>
      ):(
        <>
        {/* CART ITEMS */}
        <div className="products">
          {cart.map((item)=>(
            <div key={item.id} className="card">
              <img src={item.thumbnail || item.image} alt={item.title}></img>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div>
                <button onClick={() => dispatch(increaseQty(item.id))}>➕</button>
                <button onClick={()=> dispatch(decreaseQty(item.id))}>➖</button>
                <button onClick={()=>dispatch(removeFromCart(item.id))}>🗑</button>
              </div>
            </div>
          ))}
        </div>
        {/* TOTAL + checkout*/ }
        <div className="cart-summary">
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={()=>navigate("/checkout")}>💳 Proceed to Checkout</button>

        </div>
        </>
      )
    }
    </div>
  )
  }
export default CartUi;