import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="app-container d-flex flex-column min-vh-100 position-relative">
      <div className="background"></div>
      <div className="overlay"></div>
      <Header />
      <main className="flex-fill d-flex flex-column justify-content-center align-items-center text-center">
        <h2>Menú de La Sazon De Carmelita</h2>
        <p>Aquí va el contenido del menú...</p>
        {/* Agrega más contenido aquí */}
      </main>
      <Footer />
    </div>
  );
}

export default About;
