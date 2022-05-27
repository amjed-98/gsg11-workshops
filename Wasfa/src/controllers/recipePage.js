const path = require('path');

const recipePath = path.join(__dirname, '..', '..', 'public', 'pages', 'recipe.html');

const handleRecipePage = (req, res) => res.sendFile(recipePath);
module.exports = handleRecipePage;
