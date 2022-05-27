import React from 'react';

const PriceFilter = ({ handlePriceChange, price }) => {
  return (
    <fieldset>
      <legend>Price</legend>
      <label>
        Min Price :{`$${price.at(0)}`}
        <input
          type='range'
          min={0}
          max={9}
          value={price.at(0)}
          onChange={({ target: { value } }) => handlePriceChange(+value, price.at(1))}
        />
      </label>

      <label>
        Max Price : {`$${price.at(1)}`}
        <input
          type='range'
          min={0}
          max={9}
          value={price.at(1)}
          onChange={({ target: { value } }) => handlePriceChange(price.at(0), +value)}
        />
      </label>
    </fieldset>
  );
};

export default PriceFilter;
