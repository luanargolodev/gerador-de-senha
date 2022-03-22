let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizedPassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let newPassword = "";

sizedPassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizedPassword.innerHTML = this.value;
}

function generatePassword() {
  let pass = "";
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove('hidden');
  password.innerHTML = pass;

  newPassword = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(newPassword);
}