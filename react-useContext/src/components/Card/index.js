import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const MovieCard = (props) => {
  const { movieName, poster, rate, imdbLink, details, likes, id, deleteMovie } = props;
  return (
    <div className='movie-card'>
      <img src={poster} alt={details} />
      <div className='center'>
        <h2>{movieName}</h2>
        <h3>likes: {likes}</h3>
        <h3>rate: {rate}</h3>
        <p>
          <NavLink to={`${id}`}> more...</NavLink>
        </p>
        <button onClick={() => deleteMovie(id)}>Delete Movie</button>
      </div>
    </div>
  );
};

export default MovieCard;
