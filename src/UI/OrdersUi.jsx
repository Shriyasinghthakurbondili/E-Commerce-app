import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="container">
      <h2>📦 My Orders</h2>

      {orders.length === 0 ? (
        <h3>No orders yet 😢</h3>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="card">
            <h4>Order #{index + 1}</h4>
            <p>Total: ${order.total}</p>

            {order.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.title} × {item.quantity} {/* ✅ FIXED */}
                </p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;