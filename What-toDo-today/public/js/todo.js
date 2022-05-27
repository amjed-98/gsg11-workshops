const form = document.querySelector('form');
const todo = document.querySelector('#todo');
const userName = document.querySelector('.userName');
const spinner = document.querySelector('.spin');
const logoutBtn = document.querySelector('.logoutBtn');

const showSpinner = () => spinner.style.display = 'block';

const hideSpinner = () => spinner.style.display = 'none';

logoutBtn.addEventListener('click', () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  window.location.assign('/');
});

fetch('/allTodo')
  .then((res) => {
    showSpinner();
    return res.json();
  })
  .then((data) => data.forEach((element, i) => {
    console.log(data);
    hideSpinner();
    setTimeout(() => {
      renderTodo(data, element, i);
    }, 300);
  }));

// function to Add ToDo
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (todo.value.trim() === '') return;

  const note = todo.value;
  const date = new Date().toLocaleString();

  fetch('/todo', {
    method: 'post',
    body: JSON.stringify({ note, date }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => renderTodo(data, element, i));
      todo.value = '';
    });
});

// display name
fetch('/displayUserName')
  .then((res) => res.json())
  .then((data) => {
    userName.textContent = data[0].name;
  });
