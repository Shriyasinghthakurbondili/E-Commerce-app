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

      {/* ✅ FIXED ICONS FOR MOBILE */}
      <div className="nav-icons">
        <div className="icon-box" onClick={() => navigate("/cart")}>
          <FiShoppingCart />
          <span>{cart.length}</span>
        </div>

        <div className="icon-box" onClick={() => navigate("/wishlist")}>
          <CiHeart />
        </div>

        <div className="icon-box" onClick={() => navigate("/profile")}>
          <FiUser />
        </div>
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
    <div className="products-container">
      {filteredProducts.map((item) => (
        <div className="product-card" key={item.id}>

          <div className="product-image">
            <img src={item.thumbnail || item.image} alt={item.title} />

            <span className="category">{item.category}</span>

            <button
              className="wishlist"
              onClick={() => handleWishlist(item)}
            >
              <CiHeart />
            </button>
          </div>

          <div className="product-info">
            <h3>{item.title}</h3>

            <div className="price-cart">
              <span>${item.price}</span>

              <button onClick={() => handleCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>

  );
};

export default ProductsUi;