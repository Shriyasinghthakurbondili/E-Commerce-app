import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import { addToCart, selectCartItems } from "../Slices/CartSlice";
import { addToWishlist } from "../Slices/WishlistSlice";

import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "../Slices/ProductSlice";

import { CiHeart, CiSearch } from "react-icons/ci";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const ProductsUi = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectAllProducts) ?? [];
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  const cart = useSelector(selectCartItems) ?? [];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((item) =>
    item?.title?.toLowerCase().includes(search.toLowerCase()) ||
    item?.category?.toLowerCase().includes(search.toLowerCase())
  );

  const handleCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart 🛒");
  };

  const handleWishlist = (product) => {
    dispatch(addToWishlist(product));
    toast.success("Added to wishlist ❤️");
  };

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>{error}</h2>;

  return (
    <div className="page">
      <Toaster />

      {/* 🔥 HEADER */}
      <div className="header">
        <div className="logo">🛍 ShopHub</div>

        <div className="search-bar">
          <CiSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="nav-icons">
          <button onClick={() => navigate("/cart")}>
            <FiShoppingCart /> ({cart.length})
          </button>

          <button onClick={() => navigate("/wishlist")}>
            <CiHeart />
          </button>

          <button onClick={() => navigate("/profile")}>
            <FiUser />
          </button>
        </div>
      </div>

      {/* 🎬 VIDEO BANNER */}
      <div className="banner">
        <video autoPlay muted loop>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </video>
        <div className="banner-text">
          <h1>Big Sale 🔥</h1>
          <p>Up to 50% OFF</p>
        </div>
      </div>

      {/* 🛍 PRODUCTS */}
      <div className="products">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>

            <img src={item.thumbnail || item.image} alt={item.title} />

            <p>{item.category}</p>

            <button onClick={() => handleCart(item)}>
              Add to Cart
            </button>

            <button
              className="wishlist-btn"
              onClick={() => handleWishlist(item)}
            >
              <CiHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsUi;