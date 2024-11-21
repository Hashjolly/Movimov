import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "../styles/components/Header.css";
import logo from "../../assets/logo.png"; // Import du logo
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode, setLightMode } from '../app/slices/uiSlice';

export function Header() {
  const colors = useSelector((state) => state.ui);
  const dispatch = useDispatch();


  return (
    <>
      <header style={{ backgroundColor: colors.mainColor}}>
        <div className="logo-container">
          <img src={logo} alt="MovieIndex Logo" className="logo-image" />
          <h1 style={{ color: colors.secondColor}} className="logo-text">Movimov</h1>
        </div>
        <nav>
            <Link to="/">Accueil</Link> | <Link to="/user/1">Utilisateur 1</Link> | <Link to="/user/2">Utilisateur 2</Link>
        </nav>
        <div id="darkMode">
          <input type="checkbox" id="darkmode-toggle" onChange={(e) => {colors.darkMode ? dispatch(setLightMode()) : dispatch(setDarkMode())}} />
          <label htmlFor="darkmode-toggle"></label>
        </div>
      </header>
    </>
  )
}
