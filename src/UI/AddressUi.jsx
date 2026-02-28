import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAddress } from "../Slices/AddressSlice";
import { useNavigate } from "react-router-dom";

const AddressUi = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    address: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(saveAddress(form));
    navigate("/payment");
  };

  return (
    <div className="container">
      <h1>📍 Delivery Address</h1>

      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Phone" onChange={(e)=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="City" onChange={(e)=>setForm({...form,city:e.target.value})}/>
      <input placeholder="Pincode" onChange={(e)=>setForm({...form,pincode:e.target.value})}/>
      <textarea placeholder="Full Address" onChange={(e)=>setForm({...form,address:e.target.value})}/>

      <button onClick={handleSubmit}>Continue ➡️</button>
    </div>
  );
};

export default AddressUi;