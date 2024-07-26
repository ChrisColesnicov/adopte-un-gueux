/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import Papa from "papaparse";
import "../styles/userDescriptif.css";

export default function UserDescriptif() {
  const dataFromLoader = useLoaderData();
  const { id } = useParams();
  const [userProfil, setUserProfil] = useState();
  const navigate = useNavigate();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();

  useEffect(() => {
    const profil = data.find((profilU) => profilU.ID === id);
    if (profil) {
      setUserProfil(profil);
    }
  }, [id]);

  const handleClickNavigate = () => {
    navigate("/");
  };

  return (
    <section className="descriptContainer">
      {userProfil && (
        <div className="descript">
          <button
            type="button"
            className="btnBack"
            onClick={handleClickNavigate}
          >
            <img src="../src/assets/images/backArrow.png" alt="fleche retour" />
          </button>
          <div className="headBtnImg">
            <div className="btnDescript">
              <button type="button" className="like-button">
                <img src="../src/assets/images/like.svg" alt="next profile" />
              </button>
              <button type="button" className="buy-button">
                <img
                  src="../src/assets/images/superlike.png"
                  alt="next profile"
                />
              </button>
            </div>
            <img src={userProfil.image} alt={userProfil.Prénom} />
          </div>
          <div className="mainDescript">
            <p>
              {userProfil.Prénom} {userProfil.Nom}
            </p>
            <p>{userProfil.Age} ans</p>
            <p>Titre: {userProfil.Titre}</p>
            <p>Rang: {userProfil.ClasseSociale}</p>
            <p>Lieu: {userProfil.Localisation}</p>
            <p>Métier: {userProfil.Métier}</p>
            <p>Intérets: {userProfil.Intérets}</p>
            <p>{userProfil.Description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
