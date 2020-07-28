const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser" /* local storage*/,
  SHOWING_CN = "showing"; /*class name*/

saveName = (text) => {
  localStorage.setItem(USER_LS, text);
};

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); /*confused variable and string?*/
  form.addEventListener("submit", handleSubmit);
}

paintGreeting = (text) => {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
};

function loadName() {
  const currentUser = localStorage.getItem(
    USER_LS
  ); /*getting value of the currentUser*/
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
