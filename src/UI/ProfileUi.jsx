import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileUi = () => {
  const navigate = useNavigate();

  // ✅ Safe Redux access
  const user = useSelector((state) => state.auth?.user);
  const cart = useSelector((state) => state.cart?.cartItems || []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) {
    return <h2>Please Login First</h2>;
  }

  return (
    <div className="profile-wrapper">

      {/* 🔥 PROFILE CARD */}
      <div className="profile-card">
        <img src={user.image} alt="profile" className="profile-img" />

        <div className="profile-info">
          <h1 className="profile-title">Welcome Back 👋</h1>
          <h2 className="profile-name">{user.username}</h2>
          <p className="profile-email">{user.email}</p>

          <div className="profile-actions">
            <button
              className="btn primary"
              onClick={() => navigate("/products")}
            >
              🛍 Back to Shop
            </button>

            <button
              className="btn danger"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>

      {/* 🛒 CART SECTION */}
      <div className="cart-section">
        <h2>Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <p className="empty">No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div className="cart-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="cart-details">
                <h3>{item.title}</h3>
                <p className="cart-desc">{item.description}</p>

                <div className="cart-bottom">
                  <span className="price">₹{item.price}</span>
                  <span className="qty">Qty: {item.quantity}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔻 FOOTER */}
      <footer className="footer">
        <div className="footer-top">Back to top</div>

        <div className="footer-main">
          <div>
            <h4>Get to Know Us</h4>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Release</p>
            <p>ShopHub Science</p>
          </div>

          <div>
            <h4>Connect with Us</h4>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>

          <div>
            <h4>Make Money with Us</h4>
            <p>Sell on ShopHub</p>
            <p>Affiliate Program</p>
            <p>Advertise Product</p>
            <p>Self Publish</p>
          </div>

          <div>
            <h4>Let Us Help You</h4>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Help</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 ShopHub. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default ProfileUi;