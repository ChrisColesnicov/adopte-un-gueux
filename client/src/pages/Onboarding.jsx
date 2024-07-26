import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/onboarding.css";

export default function Onboarding() {
  const [check, setCheck] = useState(false);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => event.preventDefault();
  const MAX_LENGTH = 30;
  const handleChange = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setTitle(event.target.value);
    }
  };
  const maximumReached = title.length >= MAX_LENGTH;
  const numRemaining = MAX_LENGTH - title.length;
  const plurial = () =>
    title.length > 28 ? "caractère restant" : "caractères restants";

  const handleCheckChange = (e) => {
    setCheck(!check);
    let choixLocal = localStorage.getItem("choix");

    choixLocal = choixLocal ? JSON.parse(choixLocal) : [];
    if (choixLocal.includes(e.target.name)) {
      choixLocal = choixLocal.filter((item) => item !== e.target.name);
    } else {
      choixLocal.push(e.target.name);
    }
    localStorage.setItem("choix", JSON.stringify(choixLocal));
  };

  const handleClickNavigate = () => {
    localStorage.setItem("userName", title);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <section className="onboarding">
        <h3>Par quel noms on vous connaît en ce pays ?</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={maximumReached ? "length-maximum-reached" : "length-ok"}
            id="title"
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Noms"
          />
          <small className="remaining-characters">
            {numRemaining} {plurial()}
          </small>
        </form>
        <h3>Bienvenue à toi {title}</h3>
        <h3>De quel genre êtes-vous ?</h3>
        <div className="gender">
          <div className="gender-1">
            <label>
              <input className="checkbox" type="checkbox" name="Homme" /> Homme
            </label>
          </div>
          <div className="gender-2">
            <label>
              <input className="checkbox" type="checkbox" name="Femme" /> Femme
            </label>
          </div>
        </div>
        <h3>De quel genre recherchez-vous ?</h3>
        <div className="search-gender">
          <div className="one-gender">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Homme"
                onChange={handleCheckChange}
              />{" "}
              Homme
            </label>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Femme"
                onChange={handleCheckChange}
              />{" "}
              Femme
            </label>
          </div>
          <div className="two-gender">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Cousin"
                onChange={handleCheckChange}
              />{" "}
              Cousin/Cousine
            </label>
            <label>
              <input className="checkbox" type="checkbox" name="Chèvre" />{" "}
              Chèvre
            </label>
          </div>
        </div>
        <h3>Quel type de relation ?</h3>
        <div className="relation">
          <div className="one-relation">
            <label>
              <input className="checkbox" type="checkbox" name="Libertine" />{" "}
              Libertine
            </label>
            <label>
              <input className="checkbox" type="checkbox" name="Familiale" />{" "}
              Familiale
            </label>
          </div>
          <div className="two-relation">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Jout d'une nuit"
              />{" "}
              Jout d'une nuit
            </label>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Mariage forcé"
              />{" "}
              Mariage forcé
            </label>
          </div>
        </div>
        <h3>Quel type de rang social ?</h3>
        <div className="rang-social">
          <div className="rang-1">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Noblesse"
                onChange={handleCheckChange}
              />{" "}
              Noblesse
            </label>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Clergé"
                onChange={handleCheckChange}
              />{" "}
              Clergé
            </label>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Élite"
                onChange={handleCheckChange}
              />{" "}
              Élite
            </label>
          </div>
          <div className="rang-2">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Aristocratie"
                onChange={handleCheckChange}
              />{" "}
              Aristocratie
            </label>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="Prêtre"
                onChange={handleCheckChange}
              />{" "}
              Prêtre
            </label>
          </div>
        </div>
        <button
          type="button"
          className="button-onboarding"
          onClick={handleClickNavigate}
        >
          VALIDER
        </button>
      </section>
    </>
  );
}
