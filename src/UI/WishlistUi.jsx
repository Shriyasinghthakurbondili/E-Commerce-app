import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectWishlist,
  removeFromWishlist
} from "../Slices/WishlistSlice";

const WishlistUi = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectWishlist) || []; // ✅ FIX

  return (
    <div className="container">
      <h1>❤️ Wishlist</h1>

      {items.length === 0 ? (
        <h2>Wishlist is empty</h2>
      ) : (
        items.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>

            <img
              src={item.thumbnail || item.image}
              alt={item.title}
              width="120"
            />

            <button onClick={() => dispatch(removeFromWishlist(item.id))}>
              ❌ Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistUi;