const signUpBtn = document.querySelector(".sign-up-btn");
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const confirmPassword = document.querySelector(".confirm-password").value;
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      confirmPassword,
    }),
  })
    .then((response) => response.json())
    .then((res) => console.log("response", res))
    .catch((err) => console.log(err));
});
