import axios from "axios";

const API_URL = "https://yts.am/api/v2/list_movies.json";

const api = axios.create({
  baseURL: API_URL
});

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await api.get("/", { limit, rating });
  return movies;
};
