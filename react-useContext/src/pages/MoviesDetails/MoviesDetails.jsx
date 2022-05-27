import React from 'react';
import { Link, useParams } from 'react-router-dom';
const MoviesDetails = () => {
  const { id } = useParams();

  return (
    <h1>
      Movie Id is :{id}
      <Link to='rate'>Rate</Link>
    </h1>
  );
};

export default MoviesDetails;
