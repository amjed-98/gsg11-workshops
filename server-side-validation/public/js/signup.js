const button = document.getElementById("signup");

button.addEventListener("click", e => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("role").value;
  const mobile = document.getElementById("mobile").value;

  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      username,
      email,
      password,
      confirmPassword,
      role,
      mobile
    })
  })
    .then(response => response.json())
    .then(res => console.log("response", res))
    .catch(err => console.log(err));
});
