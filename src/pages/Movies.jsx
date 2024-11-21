import React, { useState, useEffect } from "react";
import { getMovies } from "../services/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getMovies();
        setMovies(movieData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des films", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="movies">
      <h1>Films et Séries</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="200"
            />
            <p>{movie.overview}</p>
            <a href={`/movies/${movie.id}`}>Voir les détails</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
