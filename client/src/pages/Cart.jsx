import CartItem from "../components/CartItem";
import profilesList from "../services/profilsData";

export default function Cart() {
  const cart = profilesList;

  return (
    <section>
      <h2 className="cart-title">Panier de gueux</h2>
      <div className="cart-item-container">
        {cart.map((profile) => (
          <CartItem key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
  );
}
