window.onload = () => fetchData('GET', '/recipe').then((data) => getRecipeInfo(data.categories));

// eslint-disable-next-line no-undef
let getRecipeInfo = (array) => array.map((ele) => renderRecipeCard(ele));
