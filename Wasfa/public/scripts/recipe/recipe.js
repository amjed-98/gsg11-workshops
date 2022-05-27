const recipeCard = select('.ft-recipe');
const recipeTitle = select('.recipe-title');
const recipeImage = select('.ft-recipe__thumb img');
const recipeTimeNumber = select('.time .value');
const recipeIngredientsNumber = select('.ingredients .value');
const recipeServe = select('.servings .value');
const recipeDesc = select('.description');
const backCard = select('.back-card');
const ingredientsList = select('.ingredients-list');
const viewRecipeBtn = select('.viewRecipeBtn');
const flipCardBtn = select('.flip-card-btn');

viewRecipeBtn.addEventListener('click', () => {
  recipeCard.classList.add('flip-card');
  backCard.classList.add('back-card-visible');
});

flipCardBtn.addEventListener('click', () => {
  recipeCard.classList.remove('flip-card');
  backCard.classList.remove('back-card-visible');
});

const renderRecipe = (recipe) => {
  recipeTitle.textContent = recipe.label;
  recipeImage.src = recipe.image;
  recipeTimeNumber.textContent = recipe.totalTime;
  recipeIngredientsNumber.textContent = recipe.ingredients.length;
  recipeServe.textContent = recipe.yield;
  recipeDesc.textContent = `There’s no better way to celebrate May being National ${recipe.label} Month than by sharing a sweet treat with your pup!!! ${recipe.label}...`;

  recipe.ingredientLines.slice(0, 10).map((ing) => {
    const listItem = createEl('li', 'item', ing);

    return ingredientsList.append(listItem);
  });
};

const searchTerm = {
  searchTerm: localStorage.getItem('searchTerm') || 'burger',
};

fetchData('POST', '/searchRecipe', searchTerm).then(({ hits }) => {
  const { recipe } = hits[1];
  renderRecipe(recipe);
});
