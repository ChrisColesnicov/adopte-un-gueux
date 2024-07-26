import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

import "../styles/footer.css";

export default function Footer() {
  const { cart } = useContext(CartContext);
  return (
    <section className="footer">
      <div className="footer-img">
        <img src="../src/assets/images/onboarding.svg" alt="Go to Onboarding" />
        <Link to="/chat">
          <img src="../src/assets/images/chat.png" alt="Go to chat" />
        </Link>
        <Link to="/cart" className="cart-link">
          <img
            src="../src/assets/images/cart.png"
            alt="Your cart - Favorite people"
            className="cart-icon"
          />
          <span className="cart-number">{cart.length}</span>
        </Link>
        <Link to="/settings" className="Settings-link">
        <img src="../src/assets/images/parameters.svg" alt="Go to parameters" />
        </Link>
      </div>
    </section>
  );
}
