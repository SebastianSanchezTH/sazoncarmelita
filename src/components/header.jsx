import { Link, NavLink } from "react-router-dom"; // Importa Link y NavLink
import "../styles/Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navcolor py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          La Sazon De Carmelita
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                {" "}
                {/* NavLink para resaltar el activo */}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Menu">
                Menú
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Delivery">
                Domicilios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                Acerca de
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
