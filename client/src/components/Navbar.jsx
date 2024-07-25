import "../styles/navbar.css";

export default function Navbar() {
  return (
    <section className="navbar">
      <nav className="title-logo">
        <h2 className="title">
          <span className="title-adopte">Adopte</span>
          <span className="title-un">Un</span>
          <span className="title-gueux">Gueux</span>
        </h2>
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
