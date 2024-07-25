import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Papa from "papaparse";

import CartItem from "../components/CartItem";
import CartContext from "../contexts/CartContext";


export default function Cart() {
  const {cart} = useContext(CartContext)
  const dataFromLoader = useLoaderData();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();
  
  const profilesInCart = data.filter(profile => cart.includes(profile.ID));

  return (
    <section>
      <h2 className="cart-title">Panier de gueux</h2>
      <div className="cart-item-container">
        {profilesInCart ? profilesInCart.map((profile) => (
          <CartItem key={profile.id} profile={profile} />
        )): (<p>Pas de gueux dans le panier</p>)}
      </div>
    </section>
  );
}
