import React from "react";
import "../styles/deliver.css";

function Delivery() {
  return (
    <div>
      <div className="app">
        <h2>Domicilios</h2>
        <p>
          Llámanos directamente y uno de nuestro personal te atenderá con gusto.
          También puedes contactarnos fácilmente a través de nuestro aliado de
          envios: rápido, cómodo y disponible cuando la necesites.
        </p>
        <p>¡No esperes más, contáctanos hoy mismo por la vía que prefieras!</p>
        <div class="row text-center align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="letras d-flex flex-column align-items-center">
              <div class="icon-circle mb-2">
                <i class="bi bi-telephone"></i>
              </div>
              <h5 class="fw-bold text-white">Llámanos</h5>
              <p class="mb-0 text-white">+57-311-5686200</p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="d-flex flex-column align-items-center">
              <div class="icon-circle mb-2">
                <i class="bi bi-bell"></i>
              </div>
              <h5 class="fw-bold text-white">Contacta a Raky Express</h5>
              <p class="mb-0 text-white">+57-323-2413575</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visítanos */}
      <div className="containerMap py-5">
        <h2 className="text-center fw-bold text-danger mb-5">¡Visítanos!</h2>

        <div className="row align-items-center g-4">
          <div className="col-md-5">
            <div className="p-4 bg-white rounded-4 shadow-sm">
              <h5 className="fw-bold mb-3">Contáctanos</h5>
              <p className="mb-1">
                <strong>Número:</strong> +57-311-5686200
              </p>
              <p className="mb-1">
                <strong>Dirección:</strong> Cl. 18 #12-17, Tunja, Boyacá.
              </p>
              <p className="mb-1">Esquina Pila Salada.</p>
              <p className="mb-0">
                <strong>Horario:</strong>
                <br />
                Lunes - Sábado 11:00 - 17:00
              </p>
            </div>
          </div>

          <div className="col-md-7">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Cl.%2018%20%2312-17%2C%20Tunja%2C%20Boyacá&output=embed"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
