import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLightMode } from "../app/slices/uiSlice";
import "../styles/components/Header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/movies?search=${encodeURIComponent(searchTerm)}`);
    }
  };


  const colors = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", colors.mainColor);
    document.documentElement.style.setProperty("--second-color", colors.secondColor);
    document.documentElement.style.setProperty("--third-color", colors.thirdColor);
    document.documentElement.style.setProperty("--last-color", colors.detailsColor);
  }, [colors]);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Movimov Logo" className="logo-image" />
          <h1 className="logo-text">Movimov</h1>
        </div>
      </Link>
      <form className="search-bar" onSubmit={handleSearch}>
        <div className="search-input-container">
        <FaSearch className="search-icon" onClick={handleSearch} />
        <input
          type="text"
          placeholder="Recherchez un film ou une série..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
      </form>
      <nav className="nav">
        <Link to="/">Accueil</Link>|
        <Link to="/movies">Films</Link>|
        <Link to="/favorites">Favoris</Link>
        <div id="darkMode">
          <input type="checkbox" id="darkmode-toggle" onChange={(e) => {colors.darkMode ? dispatch(setLightMode()) : dispatch(setDarkMode())}} />
          <label htmlFor="darkmode-toggle"></label>
        </div>
      </nav>
    </header>
  );
}
