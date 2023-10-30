const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordOneEl = document.getElementById("password-one");
const passwordTwoEl = document.getElementById("password-two");
const passwordThreeEl = document.getElementById("password-three");
const passwordFourEl = document.getElementById("password-four");

const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("slider-number");

let passwordCharacters = 15;

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordCharacters; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPassword += characters[randomIndex];
  }
  return randomPassword;
}

function renderPassword() {
  passwordOneEl.innerHTML = `<input type="button" value="${generateRandomPassword()}">`;
  passwordTwoEl.innerHTML = `<input type="button" value="${generateRandomPassword()}">`;
  passwordThreeEl.innerHTML = `<input type="button" value="${generateRandomPassword()}">`;
  passwordFourEl.innerHTML = `<input type="button" value="${generateRandomPassword()}">`;
}

renderPassword();

slider.addEventListener("input", function () {
  sliderNumber.textContent = `${slider.value}`;
  passwordCharacters = slider.value;
});

function rangeSlide(value) {
  sliderNumber.innerHTML = value;
}
