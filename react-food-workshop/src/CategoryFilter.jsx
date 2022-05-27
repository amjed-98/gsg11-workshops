import React from 'react';

const categories = [
  'all',
  'burger',
  'hot dog',
  'sandwich',
  'fries',
  'topping',
  'drink',
  'extra',
];

const Category = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <fieldset>
      <legend>Category</legend>

      {categories.map((category) => (
        <label key={category}>
          {category}
          <input
            type='radio'
            name='category'
            id={category}
            checked={category === selectedCategory}
            onChange={handleCategoryChange}
          />
        </label>
      ))}
    </fieldset>
  );
};

export default Category;
