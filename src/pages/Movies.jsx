import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../app/slices/moviesSlice";
import { addFavorite, removeFavorite } from "../app/slices/favoritesSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import api, { searchMovies } from "../services/api";
import "../styles/pages/Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentPage = useSelector((state) => state.movies.currentPage);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const urlPage =
    parseInt(new URLSearchParams(location.search).get("page")) || 1;

  // Synchroniser l'état global avec l'URL
  useEffect(() => {
    if (currentPage !== urlPage) {
      dispatch(setPage(urlPage));
    }
  }, [urlPage, currentPage, dispatch]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let response;
        if (searchQuery) {
          response = await searchMovies(searchQuery);
        } else {
          response = await api.get("/movie/popular", {
            params: { page: currentPage },
          });
        }

        // Log de la réponse pour vérifier ce qui est renvoyé
        console.log("Réponse de l'API : ", response.data);

        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
        setMovies([]);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [currentPage, searchQuery]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    navigate(`?page=${newPage}${searchQuery ? `&search=${searchQuery}` : ""}`);
  };

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }

    // Sauvegarder les favoris dans le localStorage
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== movie.id)
      : [...favorites, movie];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <p>Chargement des films...</p>;
  }

  return (
    <div className="movies-page">
      <h1>
        {searchQuery
          ? `Résultats de recherche : "${searchQuery}"`
          : "Films Populaires"}
      </h1>
      <div className="movies-grid">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
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
          ))
        ) : (
          <p>Aucun film trouvé.</p>
        )}
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
