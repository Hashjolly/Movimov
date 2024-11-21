import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_REACT_APP_TMDB_API_KEY,
  },
});

export const getMovies = async () => {
  try {
    const response = await axiosInstance.get("/discover/movie");
    return response.data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des films", error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du film", error);
    throw error;
  }
};
