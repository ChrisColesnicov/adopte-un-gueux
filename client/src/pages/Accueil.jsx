import profilesList from "../services/profilsData";
import Carousel from "../components/Carousel";

export default function Accueil() {
  console.info(profilesList);
  return (
    <section className="homepage">
        <Carousel />
      <div className="swipe-buttons">
        <button type="button" className="reject-button">
          <img src="../src/assets/images/next.svg" alt="next profile" />
        </button>
        <button type="button" className="buy-button">
          <img src="../src/assets/images/superlike.svg" alt="next profile" />
        </button>
        <button type="button" className="like-button">
          <img src="../src/assets/images/like.svg" alt="next profile" />
        </button>
      </div>
    </section>
  );
}
