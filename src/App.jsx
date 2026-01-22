import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container d-flex flex-column min-vh-100 position-relative">
      <div className="background"></div>
      <div className="overlay"></div>

      <Header />

      <main className="flex-fill d-flex flex-column justify-content-center align-items-center text-center title">
        <h2>Bienvenido a La Sazon De Carmelita</h2>
        <p>Platos tradicionales ¡Hechos con amor!</p>
        <button className="btn btn-yellow">Ver Menú</button>
      </main>

      <Footer />
    </div>
  );
}

export default App;
