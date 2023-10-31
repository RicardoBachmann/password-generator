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

<<<<<<< HEAD
const passwordOneEl = document.getElementById("password-one");
const passwordTwoEl = document.getElementById("password-two");
const passwordThreeEl = document.getElementById("password-three");
const passwordFourEl = document.getElementById("password-four");

const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("slider-number");

let passwordCharacters = 15;
=======

const passwordCharacters = 15;
>>>>>>> origin/main

function generateRandomPassword() {
  let randomPassword = "";

  for (let i = 0; i < passwordCharacters; i++) {
<<<<<<< HEAD
    const randomIndex = Math.floor(Math.random() * characters.length);
=======
    let randomIndex = Math.floor(Math.random() * characters.length);
>>>>>>> origin/main
    randomPassword += characters[randomIndex];
  }
  return randomPassword;
}

function renderPassword() {
  passwordOneEl.innerHTML = `<input type="button" id="1" value="${generateRandomPassword()}" onclick="copyToClipboard(1)">`;
  passwordTwoEl.innerHTML = `<input type="button" id="2" value="${generateRandomPassword()}" onclick="copyToClipboard(2)">`;
  passwordThreeEl.innerHTML = `<input type="button" id="3" value="${generateRandomPassword()}" onclick="copyToClipboard(3)">`;
  passwordFourEl.innerHTML = `<input type="button" id="4" value="${generateRandomPassword()}" onclick="copyToClipboard(4)">`;
}

<<<<<<< HEAD
renderPassword();

slider.addEventListener("input", function () {
  sliderNumber.textContent = `${slider.value}`;
  passwordCharacters = slider.value;
});

function rangeSlide(value) {
  sliderNumber.innerHTML = value;
}

function copyToClipboard(index) {
  const copyPassword = document.getElementById(index).value;
  navigator.clipboard.writeText(copyPassword).then(() => {
    alert("Copied password successfully!");
  });
}
=======
console.log("Your password is " + generateRandomPasswordOne);


>>>>>>> origin/main
