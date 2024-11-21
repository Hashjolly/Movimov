import { Link } from "react-router-dom";
import "../styles/components/Header.css";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode, setLightMode } from '../app/slices/uiSlice';

export function Header() {

  const colors = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <header style={{ backgroundColor: colors.mainColor}} className="header">
      <div className="logo-container">
        <img src={logo} alt="Movimov Logo" className="logo-image" />
        <h1 style={{ color: colors.secondColor}} className="logo-text">Movimov</h1>
      </div>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/movies">Films</Link>
        <Link to="/about">À propos</Link>
      </nav>
        <div id="darkMode">
          <input type="checkbox" id="darkmode-toggle" onChange={(e) => {colors.darkMode ? dispatch(setLightMode()) : dispatch(setDarkMode())}} />
          <label htmlFor="darkmode-toggle"></label>
        </div>
    </header>
  );
}
