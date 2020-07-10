const title = document.getElementById("title");

console.log(title);

title.innerHTML = "Hi! from JS";

console.dir(title);

// title.style.color = "red";
document.title = "Hololo";

const title1 = document.querySelector("#title");
// title1.style.color = "yellow";

// intercept event

const BASE_COLOR = "tomato";
const OTHER_COLOR = "coral";

// function handleMouseEnter() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("mouseenter", handleMouseEnter);
// }

// init();

// && , ||(or)

// const age = prompt("How old are you?");

// if (age >= 18 && age <= 21) {
//   alert("You can but you shouldn't");
// } else if (age > 21) {
//   console.log("You can drink");
// } else {
//   console.log("Too young");
// }

// title.addEventListener(
//   "mouseenter",
//   handleClick
// ); /*do not activate function immediately*/

function handleOffline() {
  console.log("You are not connected to network");
}

function handleOnline() {
  console.log("You are online!");
}

window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);

const CLICKED_CLASS = "clicked";

function handleClick() {
  //   const hasClass = title.classList.contains('clicked');
  //   if (!hasClass) {
  //     title.className = CLICKED_CLASS;   OR title.classList.add('clicked');
  //   } else {
  //     title.className = ""; OR title.classList.emove('clicked');
  //   }
  title.classList.toggle(CLICKED_CLASS); /*add & remover tikitaka*/
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
