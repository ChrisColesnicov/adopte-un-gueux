import { useState, useEffect } from "react";
import profilH from "../assets/images/profilH.png";
import profilF from "../assets/images/profilF.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserVisualisation from "../components/UserVisualisation";
import "../styles/Settings.css";

export default function Settings() {
  // État pour tous les champs de formulaire
  const [formData, setFormData] = useState({
    image: "",
    gender: "Homme",
    firstName: "",
    lastName: "",
    location: "",
    title: "",
    age: "",
    selectedValue: "",
    profession: "",
    interests: "",
    description: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialisation des données depuis le localStorage
  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    const storedGender = localStorage.getItem("userGender") || "Homme";

    if (storedImage) {
      setFormData((prevState) => ({
        ...prevState,
        image: storedImage,
        gender: storedGender,
      }));
    } else {
      const defaultImage = storedGender === "Homme" ? profilH : profilF;
      setFormData((prevState) => ({
        ...prevState,
        image: defaultImage,
        gender: storedGender,
      }));
    }
  }, []);

  // Handler pour les changements des champs de texte et autres inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler pour le changement de fichier
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem("userImage", base64Image);
        setFormData((prevState) => ({
          ...prevState,
          image: base64Image,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler pour le changement de genre
  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      gender: selectedGender,
      image: selectedGender === "Homme" ? profilH : profilF,
    }));
    localStorage.setItem("userGender", selectedGender);
  };

  // Handler pour le dropdown
  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedValue: event.target.value,
    }));
  };

  // Handler pour effacer l'image
  const handleClearImage = () => {
    localStorage.removeItem("userImage");
    setFormData((prevState) => ({
      ...prevState,
      image: formData.gender === "Homme" ? profilH : profilF,
    }));
  };

  // Handlers pour ouvrir/fermer le modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Liste des options pour le dropdown
  const options = [
    { value: "", label: "Sélectionner une option" },
    { value: "Aristocratie", label: "Aristocratie" },
    { value: "Artisan", label: "Artisan" },
    { value: "Clergé", label: "Clergé" },
    { value: "Elite", label: "Elite" },
    { value: "Noblesse", label: "Noblesse" },
  ];

  return (
    <div className="Settings">
      <Navbar />
      <h2>Charger une Image</h2>
      <img src={formData.image} alt="profil" />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="button" onClick={handleClearImage}>
        Supprimer image
      </button>

      <div>
        <label>
          <input
            type="radio"
            value="Homme"
            checked={formData.gender === "Homme"}
            onChange={handleGenderChange}
          />
          Homme
        </label>
        <label>
          <input
            type="radio"
            value="Femme"
            checked={formData.gender === "Femme"}
            onChange={handleGenderChange}
          />
          Femme
        </label>
      </div>

      <div>
        <label>
          Prénom
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Nom
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Localisation
          <input
            type="text"
            name="location"
            placeholder="Localisation"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Titre
          <input
            type="text"
            name="title"
            placeholder="Votre titre"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="dropdown">Choisir une option:</label>
        <select
          id="dropdown"
          name="selectedValue"
          value={formData.selectedValue}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          Profession
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={formData.profession}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Intérêts
          <input
            type="text"
            name="interests"
            placeholder="Intérêts"
            value={formData.interests}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="button" onClick={openModal}>
        Voir le profil
      </button>
      <UserVisualisation
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
      />
      <Footer />
    </div>
  );
}
