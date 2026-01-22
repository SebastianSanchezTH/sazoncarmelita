import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className=" py-4 footer-custom">
      <div className="container d-flex justify-content-between ">
        <div className="footer-left">
          © 2025 La Sazon De Carmelita. Todos los derechos reservados.
        </div>

        <div className="footer-right text-end">
          <div>+57 311-5686200</div>
          <div>Calle 18. Cra 12. Esquina de La Pila Salada</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
