import React from "react";
import { useNavigate } from "react-router-dom";
import bandejaPaisa from "../assets/menu/bandeja-paisa.jpg";
import frijolada from "../assets/menu/frijolada.jpg";
import almuerzo from "../assets/menu/almuerzo-ejecutivo.jpg";
import "../styles/menu.css";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== TÍTULO / HERO ===== */}
      <div className="container text-center title ">
        <h2>Menú de la casa</h2>
        <p>Sabores auténticos que te harán bailar de felicidad.</p>

        <button
          className="scroll-btn"
          onClick={() =>
            document.getElementById("cardsmenu").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Explorar el menú
        </button>
      </div>

      {/* ===== CARDS DEL MENÚ ===== */}
      <div className="containerC">
        <section
          id="cardsmenu"
          className="cardcontainer row justify-content-center"
        >
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={bandejaPaisa}
                alt="Bandeja Paisa"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Bandeja Paisa</h5>
                <p className="card-text">
                  Un plato emblemático de la cocina colombiana, destacado por su
                  sabor y generosas porciones.
                </p>
                <p className="card-text">
                  Trae: Arroz blanco, frijoles, chicharron, carne molida,
                  chorizo, huevo frito, aguacate, plátano maduro y arepa.
                </p>
                <p className="card-text">
                  Bebidas: Jugo natural o bebida gaseosa.
                </p>
                <p className="card-text">Precio: $25.000</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={frijolada} alt="Frijolada" />
              <div className="card-body text-center">
                <h5 className="card-title">Frijolada</h5>
                <p className="card-text">
                  Preparación tradicional llena de sabor, ideal para quienes
                  buscan una comida reconfortante y auténtica.
                </p>
                <p className="card-text">
                  Trae: Fríjol rojo, tocino, chicharrón, costilla de cerdo,
                  chorizo, morcilla, plátano maduro, huevo frito, cilantro.
                </p>
                <p className="card-text">
                  Bebidas: Jugo natural o bebida gaseosa.
                </p>
                <p className="card-text">Precio: $20.000</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={almuerzo}
                alt="Almuerzo Ejecutivo"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Almuerzo Ejecutivo</h5>
                <p className="card-text">
                  Pensado para quienes desean una comida deliciosa y equilibrada
                  durante su jornada laboral.
                </p>
                <p className="card-text">
                  Trae: Sopa del día, arroz blanco, proteína (pollo, carne o
                  cerdo), papa o plátano, ensalada (lechuga, tomate, cebolla),
                  legumbres (lentejas o fríjoles).
                </p>
                <p className="card-text">
                  Bebidas: Jugo natural o bebida gaseosa.
                </p>
                <p className="card-text">Precio: $16.000</p>
              </div>
            </div>
          </div>

          {/* BOTÓN PEDIDO */}
          <div className="col-12 text-center mt-4">
            <button
              className="btn btn-warning btn-lg"
              onClick={() => navigate("/")}
            >
              ¡Haz tu pedido aquí!
            </button>
          </div>
        </section>
      </div>

      {/* ===== COMENTARIOS ===== */}
      <div className="containerComentarios mt-5">
        <section id="comment" className="comentarios text-center">
          <h3>¿Qué dicen nuestros clientes?</h3>

          <div className="testimonios-container">
            <div className="testimonio">
              <p>
                "La comida es deliciosa y se siente como hecha en casa. ¡Volveré
                sin dudarlo!"
              </p>
              <span>Juan Camilo</span>
            </div>

            <div className="testimonio">
              <p>
                "Excelente atención y platos con mucho sabor, perfectos para el
                almuerzo."
              </p>
              <span>María Fernanda</span>
            </div>

            <div className="testimonio">
              <p>
                "Cada vez que vengo, salgo satisfecho. La frijolada es
                definitivamente mi favorita."
              </p>
              <span>Andrés Felipe</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Menu;
