const clockContainter = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2"); /*nested hierarchy*/

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
// divide and conquer!!!
