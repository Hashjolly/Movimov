import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération du film", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!movie) {
    return <div>Film non trouvé.</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
      />
      <p>{movie.overview}</p>
      <p>Sortie : {movie.release_date}</p>
      <p>Durée : {movie.runtime} minutes</p>
    </div>
  );
};

export default MovieDetails;
