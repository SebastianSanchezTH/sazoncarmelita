import "../styles/About.css";
import imgMision from "../assets/fondos/mision.webp";
import imgdVision from "../assets/fondos/vision.webp";

function About() {
  return (
    <div className="app-container">
      <div className="hero">
        <h2>Acerca de nosotros</h2>
        <p>
          Visítanos en nuestro acogedor restaurante, reconocido por sus
          deliciosos almuerzos, especialmente la bandeja paisa y la frijolada.
          Fundado por doña María Inez, el restaurante nace de su pasión,
          experiencia y toque casero, reflejado en nuestro slogan ‘hecho con
          amor’. Este lema representa nuestra dedicación que ponemos en cada
          plato, ofreciendo a sus clientes sabores tradicionales llenos de
          cariño y autenticidad.
        </p>
      </div>

      <div className="hystory-container">
        <div className="history">
          <h2>Nuestra historia</h2>
          <p>
            Nuestro restaurante,es un negocio familiar dedicado a la comida
            casera, donde los almuerzos son nuestra mayor fortaleza. Entre los
            platos más apetecidos por nuestros clientes se destacan la bandeja
            paisa y las frijoladas, preparadas con recetas tradicionales y ese
            sabor hogareño que nos identifica.
          </p>
          <p>
            La propietaria, doña María Inéz, dio vida a este restaurante gracias
            a su experiencia, su amor por la cocina y su inconfundible sazón.
            Nos encontramos ubicados en Tunja, Boyacá, exactamente en la Calle
            18 con Carrera 12, esquina Pila Salada, en un primer piso, donde
            cada día abrimos nuestras puertas para recibir a nuestros clientes
            como en casa.
          </p>
          <p>
            Nuestro eslogan “Hecho con amor” representa el cariño, la dedicación
            y el esfuerzo que doña María Inéz pone en cada plato. Cada
            preparación lleva un toque de tradición y auténticos sabores que
            conquistan a quienes nos visitan. Aunque somos un negocio en
            crecimiento y contamos con un equipo pequeño, trabajamos unidos como
            una familia, con un mismo objetivo: servir platos llenos de sabor,
            tradición y mucho amor.
          </p>
        </div>
      </div>

      <div className="mv-container">
        <div class="card mv-card mb-5">
          <div class="row g-0">
            <div class="col-md-5">
              <img
                src={imgdVision}
                class="img-fluid mv-img"
                alt="Imagen comida"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h3 class="card-title">Nuestra Visión</h3>
                <p class="card-text">
                  Consolidarnos como un negocio sólido y próspero, con una
                  identidad basada en la tradición y el cariño que nos define
                  como restaurante.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mv-card">
          <div class="row g-0 flex-md-row-reverse">
            <div class="col-md-5">
              <img
                src={imgMision}
                class="img-fluid mv-img"
                alt="Imagen comida"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h3 class="card-title">Nuestra Misión</h3>
                <p class="card-text">
                  Mantener viva la escencia de nuestra cocina y seguir
                  consquistando corazones a trávez de cada plato servido,
                  siempre bajo nuestro lema “Hecho con amor”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="questions-container">
        <div className="question">
          <h2 class="faq-title text-center mb-5">Preguntas Frecuentes</h2>

          <div class="faq-card mb-4">
            <h5>¿Qué servicios ofrecemos?</h5>
            <p>
              Venta de bandeja paisa, frijolada y almuerzo ejecutivo. Apoyo de
              platos de comida para eventos.
            </p>
          </div>

          <div class="faq-card mb-4">
            <h5>¿Dónde estamos ubicados?</h5>
            <p>
              Estamos ubicados en el centro de la ciudad, justo en la dirección:
              Calle 18, Cra. 12, Esquina Pila Salada.
            </p>
          </div>

          <div class="faq-card">
            <h5>¿Cómo puedo contactarlos?</h5>
            <p>
              Lo puedes hacer llamándonos al número de celular:
              <strong>311 5686200</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
