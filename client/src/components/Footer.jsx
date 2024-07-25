import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-img">
        <Link to="/onboard">
        <img src="../src/assets/images/onboarding.svg" alt="Go to Onboarding" />
        </Link>
        <Link to="/chat">
        <img src="../src/assets/images/chat.png" alt="Go to chat" />
        </Link>
        <Link to="/cart">
        <img
          src="../src/assets/images/cart.png"
          alt="Your cart - Favorite people"
        />
        </Link>
        <Link to="/parameters">
        <img src="../src/assets/images/parameters.svg" alt="Go to parameters" />
        </Link>
      </div>
    </section>
  );
}
