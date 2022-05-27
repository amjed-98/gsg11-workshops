import React from 'react';
import CategoryFilter from './CategoryFilter';
import dishes from './data';

import Dishes from './Dishes.jsx';
import PriceFilter from './PriceFilter';

class App extends React.Component {
  state = { dishes, price: [0, 9], selectedCategory: 'all' };

  handlePriceChange = (min, max) => {
    this.setState({
      price: [min, max],
      dishes: dishes.filter(
        ({ price, category }) =>
          price >= min &&
          price < max &&
          (this.state.selectedCategory === 'all' || category === this.state.selectedCategory),
      ),
    });
  };

  handleCategoryChange = ({ target: { id } }) => {
    this.setState({
      selectedCategory: id,
      dishes: dishes.filter(
        ({ price, category }) =>
          price >= this.state.price.at(0) &&
          price < this.state.price.at(1) &&
          (this.state.selectedCategory === 'all' || category === id),
      ),
    });
  };

  render() {
    return (
      <main>
        <section className='filters'>
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <form>
            <PriceFilter handlePriceChange={this.handlePriceChange} price={this.state.price} />
            <CategoryFilter
              selectedCategory={this.state.selectedCategory}
              handleCategoryChange={this.handleCategoryChange}
            />
          </form>
        </section>
        <section className='dishes'>
          <h2>Dishes</h2>

          <Dishes dishes={this.state.dishes} />
        </section>
      </main>
    );
  }
}

export default App;
