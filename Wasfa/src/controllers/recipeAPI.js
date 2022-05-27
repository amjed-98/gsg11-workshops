const fetch = require('node-fetch');

const recipeAPI = (req, res) => {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch(() => res.status(500).send('<h3>something went wrong with request<h3>'));
};

module.exports = recipeAPI;
