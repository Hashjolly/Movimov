import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api
      .get(`/movie/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Erreur :", error));
  }, [id]);

  if (!movie) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Note : {movie.vote_average} / 10</p>
    </div>
  );
}

export default MovieDetails;
