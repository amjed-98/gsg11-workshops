import React from 'react';
import DishCard from './DishCard';

const Dishes = ({ dishes }) => 
    <ul className='grid'>
      {dishes.map((dish) => (
        <DishCard key={dish.id} {...dish} />
      ))}
    </ul>

export default Dishes;
