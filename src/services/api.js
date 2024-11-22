import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "fr-FR",
  },
});

export const searchMovies = (query) => {
  return api
    .get("/search/movie", { params: { query } })
    .catch((error) => {
      console.error("Erreur de recherche : ", error);
      return { data: { results: [] } }; 
    });
};

export default api;
