import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-img">
        <Link to="/onboard">
          <img
            src="../src/assets/images/onboarding.svg"
            alt="Go to Onboarding"
          />
        </Link>
        <img src="../src/assets/images/chat.svg" alt="Go to chat" />
        <img
          src="../src/assets/images/cart.svg"
          alt="Your cart - Favorite people"
        />
        <img src="../src/assets/images/parameters.svg" alt="Go to parameters" />
      </div>
    </section>
  );
}
