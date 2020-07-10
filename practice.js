console.log("I am javascript");

// let(block scoped) , var(function scoped---globally accessed), const(constant)

let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

//

/* */
const holo = "holo";
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", true, holo];

console.log(daysOfWeek[2]);

const jihoInfo = {
  name: "jiHo",
  age: 23,
  gender: "Male",
  isHandsome: true,
  favSeries: ["My Ajeossi", "Dear my friends", "This is Us"],
  favFood: [
    { name: "hamburger", fatty: true },
    { name: "sandwitch", fatty: false },
  ],
};

console.log(jihoInfo.favSeries[2]);
jihoInfo.favSeries[2] = "Silicon Valley";
console.log(jihoInfo.favSeries[2]);
console.log(jihoInfo.favFood[0].name);
jihoInfo.favFood[0].name = "fried chicken";
console.log(jihoInfo.favFood[0].name);
console.log(
  "--------------------------------------------------------------------------------------------------------"
);

console.log(jihoInfo.favFood[1].fatty, console);

function sayHello(potato, hololo) {
  console.log("Hello", potato, ".", " You are", hololo, " years old.");
}

sayHello("JiHO", 23);

console.log(
  "-----------------------------------------------------------------------"
);

function heech1(name, age) {
  return `Hello, my name is ${name} and I'm  ${age} years old.`; /*back-tic is not single quote! Template Literal*/
}

const heechCode = heech1("Jiho", 23);

console.log(heechCode);

console.log(`string text line 1
string text line 2`); /* line break preserved */

const calculator = {
  plus: function (ha, na) {
    return ha + na;
  },
  minus: function (ha, na) {
    return ha - na;
  },
  multiply: function (ha, na) {
    return ha * na;
  },
  power: function (ha, na) {
    return ha ** na;
  },
};

const plus = calculator.plus(3, 4);
console.log(plus);

const minus = calculator.minus(3, 4);
console.log(minus);

const multiply = calculator.multiply(3, 4);
console.log(multiply);

const power = calculator.power(3, 4);
console.log(power);

console.log("---------------------------------------------");
