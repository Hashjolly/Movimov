import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oups ! La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="back-home">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
