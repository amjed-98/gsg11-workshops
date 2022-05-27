const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const errorMsg = document.querySelector('.errorMsg');
const logoutBtn = document.querySelector('.logoutBtn');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    email: emailInput.value,
    password: passInput.value,
  };

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json()).then(({ msg }) => {
    if (msg === 'success') {
      window.location.assign('/todo');
    } else {
      errorMsg.textContent = msg;
    }
  });
});

// email input Validation
emailInput.addEventListener('input', () => {
  const emailIsValid = emailInput.value.includes('@') && emailInput.value.includes('.com');

  if (!emailIsValid) {
    errorMsg.textContent = 'Please enter a valid email';
    emailInput.style.border = 'red solid 2px';
  } else {
    emailInput.style.border = 'green solid 2px';
    errorMsg.textContent = '';
  }
});

// password input Validation
passInput.addEventListener('input', () => {
  const passwordIsValid = passInput.value.length < 6;

  if (passwordIsValid) {
    passInput.style.border = 'red solid 2px';
    errorMsg.textContent = 'please enter a valid password';
  } else {
    passInput.style.border = 'green solid 2px';
    errorMsg.textContent = '';
  }
});
