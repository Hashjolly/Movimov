import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLightMode } from "../app/slices/uiSlice";
import "../styles/components/Header.css";
import logo from "../../assets/logo.png";

export function Header() {

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
      <div className="logo-container">
        <img src={logo} alt="Movimov Logo" className="logo-image" />
        <h1 className="logo-text">Movimov</h1>
      </div>
      <nav className="nav">
        <Link to="/">Accueil</Link>|
        <Link to="/movies">Films</Link>|
        <Link to="/about">À propos</Link>
        <div id="darkMode">
          <input type="checkbox" id="darkmode-toggle" onChange={(e) => {colors.darkMode ? dispatch(setLightMode()) : dispatch(setDarkMode())}} />
          <label htmlFor="darkmode-toggle"></label>
        </div>
      </nav>
    </header>
  );
}
