import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-img">
        <img src="../src/assets/images/onboarding.svg" alt="Go to Onboarding" />
        <img src="../src/assets/images/chat.png" alt="Go to chat" />
        <img
          src="../src/assets/images/cart.png"
          alt="Your cart - Favorite people"
        />
        <img src="../src/assets/images/parameters.svg" alt="Go to parameters" />
      </div>
    </section>
  );
}
