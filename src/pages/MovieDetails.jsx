import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/pages/MovieDetails.css";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: { append_to_response: "videos" },
        });
        setMovie(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du film :",
          error
        );
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Chargement...</p>;

  // Extraction de la bande-annonce
  const trailer = movie.videos?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <div className="movie-header">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <p>{movie.overview}</p>
          <p>
            <strong>Note :</strong> {movie.vote_average} / 10
          </p>
          <p>
            <strong>Genres :</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Durée :</strong> {movie.runtime} minutes
          </p>
          <p>
            <strong>Date de sortie :</strong> {movie.release_date}
          </p>
          <p>
            <strong>Budget :</strong> ${movie.budget.toLocaleString()}
          </p>
          <p>
            <strong>Revenus :</strong> ${movie.revenue.toLocaleString()}
          </p>
        </div>
      </div>

      {trailer && (
        <div className="movie-trailer">
          <h2>Bande-annonce</h2>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Bande-annonce"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
