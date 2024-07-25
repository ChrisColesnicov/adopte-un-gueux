/* eslint-disable react/prop-types */
export default function CartItem({ profile }) {
  return (
    <div className="cart-item-profile-container">
      <div className="cart-item-profile">
        <img
          src={profile.photos}
          alt={profile.prenom}
          className="cart-item-image"
        />
        <p className="cart-item-name">
          {profile.prenom}
          <span> {profile.nom}</span>
        </p>
      </div>
      <button type="button" className="reject-button-cart">
        <img src="../src/assets/images/next.svg" alt="next profile" />
      </button>
    </div>
  );
}
