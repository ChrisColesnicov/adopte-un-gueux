import profilesList from "../services/profilsData";

export default function Cart() {
  const cart = profilesList;

  return (
    <section>
      <h2>Panier de gueux</h2>
      {cart.map((profile) => (
        <div key={profile.id}>
          <p>{profile.prenom}<span> {profile.nom}</span></p>
        </div>
      ))}
    </section>
  );
}
