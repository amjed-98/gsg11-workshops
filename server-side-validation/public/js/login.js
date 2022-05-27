const loginButton = document.getElementById('login');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email);

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((res) => console.log('response', res))
    .catch((err) => console.log(err));
});
