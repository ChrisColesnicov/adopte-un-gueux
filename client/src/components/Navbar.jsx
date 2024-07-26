import { Link } from "react-router-dom";
import logo from "@harmonia/server/public/assets/images/logo.svg";
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
        <Link to="/">
          <img
            src={logo}
            className="logo"
            alt="Logo - Adopte Un Gueux"
          />
        </Link>
      </nav>
      <div className="separator" />
    </section>
  );
}
