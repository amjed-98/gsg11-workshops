import React, { useContext, useState } from 'react';
const placeholderImage = 'https://via.placeholder.com/300';

const moviesList = [
  {
    id: 1,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '7.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 2,
  },
  {
    id: 2,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 32,
  },
  {
    id: 3,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '7.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 25,
  },
  {
    id: 4,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 33,
  },
];

const moviesCtx = React.createContext({ moviesList, deleteMovie: () => {} });

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesList);

  const deleteMovie = (id) => {
    const filteredMoviesList = movies.filter((movie) => movie.id !== id);
    setMovies(filteredMoviesList);
  };

  return <moviesCtx.Provider value={{ deleteMovie, movies }}>{children}</moviesCtx.Provider>;
};

export { moviesCtx };
export default MoviesProvider;
