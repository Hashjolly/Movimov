import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL, // Assurez-vous que votre base URL est correcte
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY, // Assurez-vous que votre clé API est correctement définie dans votre fichier .env
    language: "fr-FR",
  },
});

export const searchMovies = (query) => {
  return api
    .get("/search/movie", { params: { query } })
    .catch((error) => {
      console.error("Erreur de recherche : ", error);
      return { data: { results: [] } }; // Retourner un tableau vide en cas d'erreur
    });
};

export default api;
