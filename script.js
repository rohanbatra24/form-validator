const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".messgae-container");
const message = document.getElementById("message");

let isValid = false;

const validateForm = (params) => {
  // using constraint API
  isValid = form.checkValidity();
  console.log(isValid);
};

const processFormData = (e) => {
  e.preventDefault();
  console.log(`e`, e);

  // validate form
  validateForm();
};

// event listener
form.addEventListener("submit", processFormData);
