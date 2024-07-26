import { useState, useEffect } from "react";
import profilH from '../assets/images/profilH.png'; 
import profilF from '../assets/images/profilF.png';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Settings() {
    const [image, setImage] = useState('');
    const [gender, setGender] = useState('Homme');

    useEffect(() => {
        const storedImage = localStorage.getItem('userImage');
        const storedGender = localStorage.getItem('userGender') || 'Homme'; 
        setGender(storedGender);

        if (storedImage) {
            setImage(storedImage);
        } else {
            const defaultImage = storedGender === 'Homme' ? profilH : profilF;
            setImage(defaultImage);
        }
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                localStorage.setItem('userImage', base64Image);
                setImage(base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClearImage = () => {
        localStorage.removeItem('userImage');
        setImage(gender === 'Homme' ? profilH : profilF);
    };

    const handleGenderChange = (event) => {
        const selectedGender = event.target.value;
        setGender(selectedGender);
        localStorage.setItem('userGender', selectedGender);

        const defaultImage = selectedGender === 'Homme' ? profilH : profilF;
        setImage(defaultImage);
    };

    const [selectedValue, setSelectedValue] = useState('');

    const options = [
        { value: '', label: 'Sélectionner une option' },
        { value: 'Aristocratie', label: 'Aristocratie' },
        { value: 'Artisan', label: 'Artisan' },
        { value: 'Clergé', label: 'Clergé' },
        { value: 'Elite', label: 'Elite' },
        { value: 'Noblesse', label: 'Noblesse' },
    ];

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        
        <div className="Settings">
            <Navbar />
            <h2>Charger une Image</h2>
            <img
                src={image}
                alt="profil"
            />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="button" onClick={handleClearImage}>Supprimer image</button>
            
            <div>
                <label>
                    <input
                        type="radio"
                        value="Homme"
                        checked={gender === 'Homme'}
                        onChange={handleGenderChange}
                    />
                    Homme
                </label>
                <label>
                    <input
                        type="radio"
                        value="Femme"
                        checked={gender === 'Femme'}
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
                    placeholder="Prénom"
                    />
                </label>
                <label>
                Nom
                    <input
                    type="text"
                    placeholder="Nom"
                    />
                </label>
            </div>
            <div>
            <label>
                Localisation
                    <input
                    type="text"
                    placeholder="Localisation"
                    />
                </label>
                <label>
                Titre
                    <input
                    type="text"
                    placeholder="Votre titre"
                    />
                </label>
            </div>
            <div>
                <label>
                Age
                    <input
                    type="number"
                    placeholder="Age"
                    />
                </label>
            </div>
            <div>
            <label htmlFor="dropdown">Choisir une option:</label>
            <select
                id="dropdown"
                value={selectedValue}
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
                    type="Text"
                    placeholder="Profession"
                    />
                </label>
        </div>
        <div>
                <label>
                Interets
                    <input
                    type="text"
                    placeholder="Interets"
                    />
                </label>
                <label>
                Description
                    <input
                    type="text"
                    placeholder="Description"
                    />
                </label>
        </div>
        <button type="button" >Voir le profil</button>
        <Footer />
        </div>
    );
}
