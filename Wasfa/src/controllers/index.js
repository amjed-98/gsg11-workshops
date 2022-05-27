const recipeAPI = require('./recipeAPI');
const searchRecipeAPI = require('./searchRecipeAPI');

const handle404 = require('./404');
const handle500 = require('./500');

const handleRecipePage = require('./recipePage');

module.exports = {
  searchRecipeAPI,
  recipeAPI,
  handle404,
  handle500,
  handleRecipePage,
};
