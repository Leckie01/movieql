import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";

const api = axios.create({
  baseURL: BASE_URL
});

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await api.get("/list_movies.json", {
    params: { limit, minimum_rating: rating }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await api.get("/movie_details.json", {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await api.get("/movie_suggestions.json", { params: { movie_id: id } });

  return movies;
};
