/* eslint-disable react/prop-types */
export default function CartItem({ profile }) {
  return (
    <div className="cart-item-profile-container">
      <div className="cart-item-profile">
        <img
          src={profile.image}
          alt={profile.Prénom}
          className="cart-item-image"
        />
        <div className="cart-item-name">
          <p>{profile.Prénom}</p>
          <p>{profile.Nom}</p>
        </div>
      </div>
      <button type="button" className="reject-button-cart">
        <img src="../src/assets/images/next.svg" alt="next profile" />
      </button>
    </div>
  );
}
