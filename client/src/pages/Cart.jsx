import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Papa from "papaparse";

import CartItem from "../components/CartItem";
import CartContext from "../contexts/CartContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const dataFromLoader = useLoaderData();
  const navigate = useNavigate();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();

  const profilesInCart = data.filter((profile) => cart.includes(profile.ID));

  const handleClickNavigate = () => {
    navigate("/Acceuil");
  };

  return (
    <>
      <Navbar />
      <button type="button" className="btn-Back" onClick={handleClickNavigate}>
        <img src="../src/assets/images/backArrow.png" alt="fleche retour" />
      </button>
      <section className="cartSection">
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
