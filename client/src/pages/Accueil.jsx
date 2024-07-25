import Carousel from "../components/Carousel";

export default function Accueil() {
  return (
    <section className="homepage">
      <Carousel />
      <div className="swipe-buttons">
        <button type="button" className="like-button">
          <img src="../src/assets/images/like.svg" alt="next profile" />
        </button>
        <button type="button" className="buy-button">
          <img src="../src/assets/images/superlike.png" alt="next profile" />
        </button>
      </div>
    </section>
  );
}
