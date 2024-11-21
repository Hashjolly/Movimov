import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../app/slices/moviesSlice";
import { addFavorite, removeFavorite } from "../app/slices/favoritesSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import api, { searchMovies } from "../services/api";
import "./../styles/pages/Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const currentPage = useSelector((state) => state.movies.currentPage);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/movie/popular", { params: { page: currentPage } })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Erreur :", error));
  }, [currentPage]);

  const handlePageChange = (newPage) => dispatch(setPage(newPage));

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const handleSearch = (query) => {
    searchMovies(query)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Erreur lors de la recherche :", error));
  };

  return (
    <div className="movies-page">
      <h1>Films Populaires</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <h3>{movie.title}</h3>
            <button onClick={() => toggleFavorite(movie)}>
              {favorites.find((fav) => fav.id === movie.id)
                ? "Retirer des favoris"
                : "Ajouter aux favoris"}
            </button>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
