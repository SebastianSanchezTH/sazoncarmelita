import React from "react";

function About() {
  return (
    <div className="app-container d-flex flex-column min-vh-100 position-relative">
      <div className="background"></div>
      <div className="overlay"></div>
      <main className="flex-fill d-flex flex-column justify-content-center align-items-center text-center">
        <h2>Menú de La Sazon De Carmelita</h2>
        <p>Aquí va el contenido del menú...</p>
        {/* Agrega más contenido aquí */}
      </main>
    </div>
  );
}

export default About;
