import { useEffect } from "react";
import PropTypes from "prop-types";

import "../styles/Settings.css";

export default function UserVisualisation({ formData, isOpen, onClose }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".modal-content") === null) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <section className="userVisualisation">
      <img
        className="imgUserProfil"
        src={formData.image}
        alt={formData.firstName}
      />

      <div className="mainUserDescript">
        <p>
          {formData.firstName} {formData.lastName}
        </p>
        <p>{formData.age} ans</p>
        <p>Titre: {formData.title}</p>
        <p>Rang: {formData.selectedValue}</p>
        <p>Lieu: {formData.location}</p>
        <p>Métier: {formData.profession}</p>
        <p>Intérets: {formData.interests}</p>
        <p>{formData.description}</p>
      </div>
    </section>
  );
}
UserVisualisation.propTypes = {
  formData: PropTypes.shape({
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    title: PropTypes.string,
    selectedValue: PropTypes.string,
    profession: PropTypes.string,
    interests: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
