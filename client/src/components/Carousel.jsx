/* eslint-disable import/no-unresolved */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useLoaderData, Link } from "react-router-dom";

import Papa from "papaparse";

import "@splidejs/react-splide/css";
import "../styles/carousel.css";

export default function Carousel() {
  const dataFromLoader = useLoaderData();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();

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
      {data?.map((profil) => (
        <SplideSlide
          key={profil.ID}
          className="userCarousel"
          style={{ backgroundImage: `url(${profil.image})` }}
        >
          <div className="carouselDescription">
            <Link to={`/${profil.ID}`} className="linkDesc">
              <h2 className="titleDescription">
                {profil.Prénom} {profil.Nom}, {profil.Age} ans
              </h2>
              <div className="titrelieu">
                <p>{profil.Titre}</p>
                <p>{profil.Localisation}</p>
              </div>
              <p className="userDescription">{profil.Description}</p>
            </Link>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
