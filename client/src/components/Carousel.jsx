/* eslint-disable import/no-unresolved */
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "../styles/carousel.css";

export default function Carousel() {
  return (
    <Splide
      className="carrousel"
      options={{
        pagination: false,
        perPage: 1,
        speed: 500,
        type: "loop",
        arrows: false,
      }}
    >
      <SplideSlide className="userCarousel">
        <div className="carouselDescription">
          <h2 className="titleDescription">Aliénore d'Aquitaine, 22 ans</h2>
          <div className="titrelieu">
            <p>Baronne du Mont de Petrus</p>
            <p>Saint-Emilion, Aquitaine</p>
          </div>
          <p className="userDescription">
            Cherche preu chevalier capable de couper des têtes avec son
            *glaive*.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide className="userCarousel">
        <div className="carouselDescription">
          <h2 className="titleDescription">Aliénore d'Aquitaine, 22 ans</h2>
          <div className="titrelieu">
            <p>Baronne du Mont de Petrus</p>
            <p>Saint-Emilion, Aquitaine</p>
          </div>
          <p className="userDescription">
            Cherche preu chevalier capable de couper des têtes avec son
            *glaive*.
          </p>
        </div>
      </SplideSlide>
    </Splide>
  );
}
