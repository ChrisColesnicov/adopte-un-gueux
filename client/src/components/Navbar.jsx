import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="siteName">AdopteUnGueux</h2>
        <img
          src="../src/assets/images/logo.svg"
          className="logo"
          alt="Logo - Adopte Un Gueux"
        />
      </nav>
      <div className="separator">{}</div>
    </>
  );
}
