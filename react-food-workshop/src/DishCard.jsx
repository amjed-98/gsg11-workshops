import React from 'react';

const DishCard = ({ name, description, price, category }) => {
  return (
    <li className='card'>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
    </li>
  );
};

export default DishCard;
