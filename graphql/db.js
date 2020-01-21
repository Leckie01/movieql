export let movies = [
  {
    id: "0",
    name: "Leckie",
    age: 27,
    gender: "male"
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Japan Guy",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "moondaddi",
    age: 18,
    gender: "male"
  },
  {
    id: "6",
    name: "flynn",
    age: 18,
    gender: "male"
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
