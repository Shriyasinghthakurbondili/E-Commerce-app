import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentUi = () => {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>💳 Payment</h1>

      <label>
        <input
          type="radio"
          name="payment"
          onChange={() => setMethod("upi")}
        />
        UPI
      </label>

      <label>
        <input
          type="radio"
          name="payment"
          onChange={() => setMethod("card")}
        />
        Card
      </label>

      <label>
        <input
          type="radio"
          name="payment"
          onChange={() => setMethod("cod")}
        />
        Cash on Delivery
      </label>

      {method === "upi" && <input placeholder="Enter UPI ID" />}
      {method === "card" && (
        <>
          <input placeholder="Card Number" />
          <input placeholder="Expiry Date" />
          <input placeholder="CVV" />
        </>
      )}

      <button onClick={() => navigate("/otp")}>Pay Now</button>
    </div>
  );
};

export default PaymentUi;