import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Home.css";

export function Home() {
  return (
    <div className="home-container">
      <section className="introduction">
        <div className="introduction-text">
          <h2>Trouvez, explorez et partagez vos films préférés</h2>
          <p>
            Avec <strong>Movimov</strong>, accédez à une immense base de données
            de films, séries et documentaires. Découvrez des trésors cachés et
            créez vos listes personnalisées !
          </p>
          <Link to="/movies">
            <button className="start-button">Commencer maintenant</button>
          </Link>
        </div>
        <div className="introduction-image">
          <img
            src="/assets/images/home/popcorn_cinema_pic.png"
            alt="Popcorn et écran de cinéma"
          />
        </div>
      </section>

      <section id="about" className="about">
        <h2>À propos</h2>
        <p>
          Movimov est votre plateforme ultime pour explorer les films de tous
          genres et de toutes époques. Que vous soyez fan d'horreur, de comédie,
          de drame ou de science-fiction, nous avons quelque chose pour vous.
        </p>
      </section>

      <section id="features" className="features">
        <h2>Nos fonctionnalités</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Recherche Avancée</h3>
            <p>
              Filtrez les films par genre, année, popularité et bien plus
              encore.
            </p>
          </div>
          <div className="feature">
            <h3>Listes Personnalisées</h3>
            <p>Créez et partagez vos propres listes de films avec vos amis.</p>
          </div>
          <div className="feature">
            <h3>Évaluations et Critiques</h3>
            <p>
              Lisez les avis des autres utilisateurs et partagez les vôtres.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
