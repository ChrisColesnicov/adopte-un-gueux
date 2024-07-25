import { useContext } from "react";
import CartItem from "../components/CartItem";
import CartContext from "../contexts/CartContext";

export default function Cart() {
  const {cart} = useContext(CartContext)
  return (
    <section>
      <h2 className="cart-title">Panier de gueux</h2>
      <div className="cart-item-container">
        {cart ? cart.map((profile) => (
          <CartItem key={profile.id} profile={profile} />
        )): console.info("Pas de gueux dans le panier")}
      </div>
    </section>
  );
}
