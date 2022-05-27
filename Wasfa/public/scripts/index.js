const cardSection = document.querySelector('#FoodCards');
const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
cardSection.textContent = '';

const renderRecipeCard = (el) => {
  const div = document.createElement('div');
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  const divDecription = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const divBtn = document.createElement('div');
  const btn = document.createElement('button');
  div.className = 'FoodCard';

  img.id = 'recipeImg';
  img.src = el.strCategoryThumb;
  divDecription.id = 'desciption';
  h1.textContent = el.strCategory;
  btn.type = 'submit';
  btn.id = 'viewRecipeBtn';
  btn.innerText = 'View Recipe';
  divBtn.id = 'divBtn';

  p.textContent = `${el.strCategoryDescription.slice(0, 105)}...know more`;
  cardSection.appendChild(div);

  divImg.appendChild(img);
  divBtn.appendChild(btn);
  divDecription.appendChild(h1);
  divDecription.appendChild(p);
  div.appendChild(divImg);
  div.appendChild(divDecription);
  div.appendChild(divBtn);

  btn.addEventListener('click', () => {
    localStorage.setItem('searchTerm', el.strCategory);
    window.location.assign('/searchRecipe');
  });
};

form.addEventListener('submit', () => localStorage.setItem('searchTerm', searchInput.value));
