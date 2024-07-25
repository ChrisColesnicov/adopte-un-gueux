import { useContext } from "react";
import Carousel from "../components/Carousel";
import CartContext from "../contexts/CartContext";

export default function Accueil() {
  const { setCart } = useContext(CartContext);

  const addCart = () => {
    const element = document.querySelector(".is-active.is-visible");
    const ariaLabel = element?.getAttribute("aria-label");
    const id = ariaLabel.split(" ")[0];
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
    <section className="homepage">
      <Carousel />
      <div className="swipe-buttons">
        <button type="button" className="like-button" onClick={() => addCart()}>
          <img src="../src/assets/images/like.svg" alt="next profile" />
        </button>
        <button type="button" className="buy-button">
          <img src="../src/assets/images/superlike.png" alt="next profile" />
        </button>
      </div>
    </section>
  );
}
