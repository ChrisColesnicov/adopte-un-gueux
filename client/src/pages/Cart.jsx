import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Papa from "papaparse";

import CartItem from "../components/CartItem";
import CartContext from "../contexts/CartContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const dataFromLoader = useLoaderData();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();

  const profilesInCart = data.filter((profile) => cart.includes(profile.ID));

  return (
    <>
      <Navbar />
      <section>
        <h2 className="cart-title">Panier de gueux</h2>
        <div className="cart-item-container">
          {profilesInCart ? (
            profilesInCart.map((profile) => (
              <CartItem key={profile.ID} profile={profile} />
            ))
          ) : (
            <p>Pas de gueux dans le panier</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
