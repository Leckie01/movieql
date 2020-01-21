import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies()
  }
};

export default resolvers;
