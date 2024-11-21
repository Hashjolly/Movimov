import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../app/slices/favoritesSlice";
import "../styles/pages/Favorites.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    dispatch(removeFavorite(movie));
  };

  return (
    <div className="favorites-page">
      <h1>Mes Favoris</h1>
      <div className="favorites-grid">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <h3>{movie.title}</h3>
              <button onClick={() => handleRemoveFavorite(movie)}>
                Retirer des favoris
              </button>
            </div>
          ))
        ) : (
          <p>Aucun film dans vos favoris.</p>
        )}
      </div>
    </div>
  );
}
