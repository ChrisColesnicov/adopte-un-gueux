import { useContext } from "react";
import { Link } from "react-router-dom";
import onboarding from "@harmonia/server/public/assets/images/onboarding.svg";
import chat from "@harmonia/server/public/assets/images/chat.png";
import chariot from "@harmonia/server/public/assets/images/cart.png";
import parameters from "@harmonia/server/public/assets/images/parameters.svg";
import CartContext from "../contexts/CartContext";

import "../styles/footer.css";

export default function Footer() {
  const { cart } = useContext(CartContext);

  const handleClickOnboard = () => localStorage.removeItem("choix");

  return (
    <section className="footer">
      <div className="separator">{}</div>
      <div className="footer-img">
        <Link to="/" onClick={handleClickOnboard}>
          <img src={onboarding} alt="Go to Onboarding" />
        </Link>

        <Link to="/chat">
          <img src={chat} alt="Go to chat" />
        </Link>
        <Link to="/cart" className="cart-link">
          <img
            src={chariot}
            alt="Your cart - Favorite people"
            className="cart-icon"
          />
          {cart.length > 0 ? (
            <span className="cart-number">{cart.length}</span>
          ) : (
            ""
          )}
        </Link>
        <Link to="/settings" className="Settings-link">
          <img src={parameters} alt="Go to parameters" />
        </Link>
      </div>
    </section>
  );
}
