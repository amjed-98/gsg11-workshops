const submitBtn = document.querySelector('#submitBtn');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputConfirmsPassword = document.querySelector('#confirmsPassword');
const textError = document.querySelector('.error');

submitBtn.addEventListener('click', () => {
  fetch('/signUp', {
    method: 'post',
    body: JSON.stringify({
      name: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
      confirmsPassword: inputConfirmsPassword.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((error) => {
      if (error.message) {
        window.location = '/todo';
      } else if (error.email) {
        textError.textContent = 'email is used try another one';
      } else if (error.hash) {
        textError.textContent = 'password does not match';
      } else if (error.validation) {
        textError.textContent = 'validation error';
      }
    });
});
