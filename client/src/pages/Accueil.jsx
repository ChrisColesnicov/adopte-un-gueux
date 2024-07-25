import profilesList from "../services/profilsData";

export default function Accueil(){
    console.info(profilesList)
    return (
        <>
        <div className="swipe-container">
            <h2>Carrousel</h2>
        </div>
        <div className="swipe-description">
            <p>Doggo <span>, 0.2 ans</span> </p>
            <p>Chien mignon</p>
            <p>Une plage mignonne</p>
            <p>Cherche une copine pour courir après la balle.</p>
            </div>
        </>
    )
}