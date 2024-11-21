import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "fr-FR",
  },
});

export const searchMovies = (query) =>
  api.get("/search/movie", { params: { query } });

export default api;
