/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function CartItem({ profile }) {
  const { setCart } = useContext(CartContext);

  const addCart = () => {
    const id = profile.ID;
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (newCart.includes(id)) {
        const index = newCart.indexOf(id);
        if (index > -1) {
          newCart.splice(index, 1);
        }
      } else {
        newCart.push(id);
      }
      return newCart;
    });
  };

  return (
    <div className="cart-item-profile-container">
      <div className="cart-item-profile">
        <img
          src={profile.image}
          alt={profile.Prénom}
          className="cart-item-image"
        />
        <div className="cart-item-name">
          <p>{profile.Prénom}</p>
          <p>{profile.Nom}</p>
        </div>
      </div>
      <button type="button" className="reject-button-cart" onClick={() => addCart()}>
        <img src="../src/assets/images/next.svg" alt="next profile" />
      </button>
    </div>
  );
}
