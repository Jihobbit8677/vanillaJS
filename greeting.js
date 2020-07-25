const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

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
  } else {
    paintGreeting(currentUser);
  }
}

function init() {}

init();
