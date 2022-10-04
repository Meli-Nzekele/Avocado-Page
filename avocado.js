function signUp() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let h3 = document.querySelector("h3");

  if (name.length > 0 && email.length > 0) {
    h3.innerHTML = `Thanks for signing up ${name}!`;
    alert(`Thanks for signing up ${name}!🌿`);
  } else {
    h3.innerHTML = `Try again!`;
    alert(`Try again!`);
  }
}

let newsletterButton = document.querySelector(".signUpButton");
newsletterButton.addEventListener("click", signUp);
