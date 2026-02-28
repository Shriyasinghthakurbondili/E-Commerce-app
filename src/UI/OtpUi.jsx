import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtpUi = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  // ✅ correct function
  const generateOtp = () => {
    const randomOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(randomOtp);
    alert(`Your OTP is: ${randomOtp}`);
  };

  // ✅ useEffect (NO ERROR)
  useEffect(() => {
    generateOtp();
  }, []);

  const verifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      alert("✅ Payment Successful");
      navigate("/tracking");
    } else {
      alert("❌ Invalid OTP");
    }
  };

  return (
    <div className="container">
      <h1>🔐 Enter OTP</h1>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OtpUi;