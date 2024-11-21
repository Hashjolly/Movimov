import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "../styles/components/Header.css";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="MovieIndex Logo" className="logo-image" />
          <h1 className="logo-text">Movimov</h1>
        </div>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/user/1">Utilisateur 1</Link>{" "}
          | <Link to="/user/2">Utilisateur 2</Link>
        </nav>
      </header>
    </>
  );
}
