import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/movies?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Movimov Logo" className="logo-image" />
        <h1 className="logo-text">Movimov</h1>
      </div>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/movies">Films</Link>
        <Link to="/favorites">Favoris</Link>
      </nav>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Recherchez un film ou une série..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
}
