// const body = document.querySelector("body");

// const IMG_NUMBER = 3;

// paintImage = (imgNumber) => {
//   const image = new Image();
//   image.src = `images/${
//     imgNumber + 1
//   }.jpg`; /* adding attribute to newly added elements*/
//   body.classList.add("bgImage"); /*adding CSS to newly added elements*/
//   body.prepend(image);
// };

// genRandom = () => {
//   const number = Math.floor(Math.random() * IMG_NUMBER);
//   return number;
// };

// init = () => {
//   const randomNumber = genRandom();
//   paintImage(randomNumber);
// };

// init();

const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
