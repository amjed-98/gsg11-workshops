const input = document.querySelector('#car');
const carsList = document.querySelector('#carsList');
const form = document.querySelector('form');
const cards = document.querySelector('.cards');
fetch('http://localhost:3000/cars', 'GET', (res) => {
  res.map((car) => {
    const option = document.createElement('option');
    option.innerText = car.name;
    option.value = car.name;
    return carsList.appendChild(option);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value === '') return;
  fetch(`${window.location.href}cars/images`, 'GET', (res) => {
    res.results
      .filter((car) => car.alt_description.includes(input.value))
      .map((car) => {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const carDescription = document.createElement('div');
        const carTitle = document.createElement('h1');
        const carDes = document.createElement('p');

        carTitle.innerText = car.description;
        carDes.innerText = car.alt_description;
        card.className = 'car';
        image.src = car.urls.regular;
        carDescription.className = 'car-description';
        carTitle.id = 'car-title';
        carDes.id = 'car-des';
        carDescription.append(carTitle, carDes);
        card.append(image, carDescription);
        cards.innerText = '';
        return cards.appendChild(card);
      });
  });
});
