// import profilesList from "../services/profilsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Accueil() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
