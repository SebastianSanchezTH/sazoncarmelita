import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // Importa Routes, Route y useNavigate
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./pages/Menu_p";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import "./styles/App.css";

function App() {
  const navigate = useNavigate(); // Hook para navegación programática

  return (
    <div className="app-container d-flex flex-column min-vh-100 position-relative">
      <div className="background"></div>
      <div className="overlay"></div>

      <Header />

      <Routes>
        {/* Ruta para la página de inicio */}
        <Route
          path="/"
          element={
            <main className="flex-fill d-flex flex-column justify-content-center align-items-center text-center title">
              <h2>Bienvenido a La Sazon De Carmelita</h2>
              <p>Platos tradicionales ¡Hechos con amor!</p>
              <button
                className="btn btn-yellow"
                onClick={() => navigate("/menu")}
              >
                Ver Menú
              </button>
            </main>
          }
        />
        {/* Ruta para el menú */}
        <Route path="/menu" element={<Menu />} />
        {/* Ruta para domicilios */}
        <Route path="/delivery" element={<Delivery />} />
        {/* Ruta para acerca de */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
