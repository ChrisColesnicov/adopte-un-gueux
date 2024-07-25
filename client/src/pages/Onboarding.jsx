import { useState } from "react";
import "../styles/onboarding.css";

export default function Onboarding() {
  const [check, setCheck] = useState(false);

  const handleChange = () => setCheck(!check);
  console.info(`la valeur change"${handleChange}`);
  return (
    <section className="onboarding">
      <h3>Par quel noms on vous connaît en ce pays ?</h3>
      <form>
        <input type="text" className="name" />
      </form>
      <h3>De quel genre êtes-vous ?</h3>
      <div className="gender">
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Homme"
            onChange={handleChange}
          />
          Homme
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Homme"
            onChange={handleChange}
          />{" "}
          Femme
        </label>
      </div>
      <h3>De quel genre recherchez-vous ?</h3>
      <div className="search-gender">
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Homme"
            onChange={handleChange}
          />{" "}
          Homme
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Homme"
            onChange={handleChange}
          />{" "}
          Femme
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name=" SCousin/Cousine"
            onChange={handleChange}
          />
          Cousin/Cousine
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Chèvre"
            onChange={handleChange}
          />{" "}
          Chèvre
        </label>
      </div>
      <h3>Quel type de relation ?</h3>
      <div className="relation">
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Mariage forcé"
            onChange={handleChange}
          />{" "}
          Mariage forcé
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Familiale"
            onChange={handleChange}
          />{" "}
          Familiale
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Jout d'une nuit"
            onChange={handleChange}
          />{" "}
          Jout d'une nuit
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Libertine"
            onChange={handleChange}
          />{" "}
          Libertine
        </label>
      </div>
      <h3>Quel type de rang social ?</h3>
      <div className="rang-social">
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Noblesse"
            onChange={handleChange}
          />{" "}
          Noblesse
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Bourgeoise"
            onChange={handleChange}
          />{" "}
          Clergé
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Marginaux"
            onChange={handleChange}
          />{" "}
          Marginaux
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Clergé"
            onChange={handleChange}
          />{" "}
          Bourgoise
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="Paysannerie"
            onChange={handleChange}
          />{" "}
          Paysannerie
        </label>
      </div>
      <button type="button" className="button-onboarding">
        VALIDER
      </button>
    </section>
  );
}
