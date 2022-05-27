const express = require('express');

const router = express.Router();

const {
  searchRecipeAPI,
  recipeAPI,
  handle404,
  handle500,
  handleRecipePage,
} = require('../controllers');

router.get('/recipe', recipeAPI);

router.route('/search-?recipe').post(searchRecipeAPI).get(handleRecipePage);
router.use(handle404);
router.use(handle500);

module.exports = router;
