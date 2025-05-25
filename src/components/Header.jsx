import React from "react";

export default function Header({ setView, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => setView("home")}>
          TiendaReact
        </a>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a
              className="nav-link me-4"
              href="#"
              onClick={() => setView("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link me-4"
              href="#"
              onClick={() => setView("promotions")}
            >
              Promociones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setView("about")}>
              Acerca de nosotros
            </a>
          </li>
        </ul>

        <button
          className="btn btn-outline-light"
          onClick={() => setView("cart")}
        >
          🛒 Carrito ({cartCount})
        </button>
      </div>
    </nav>
  );
}
