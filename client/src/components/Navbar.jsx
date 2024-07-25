import "../styles/navbar.css";

export default function Navbar() {
  return (
    <section className="navbar">
      <nav className="title-logo">
        <h2 className="siteName">AdopteUnGueux</h2>
        <img
          src="../src/assets/images/logo.svg"
          className="logo"
          alt="Logo - Adopte Un Gueux"
        />
      </nav>
      <div className="separator">{}</div>
    </section>
  );
}
