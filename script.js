const generateBtn = document.querySelector("#generate-btn");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const resultEl = document.getElementById("password-result");

generateBtn.addEventListener("click", function (event) {
  const passwordLength = Number(lengthEl.value);
  const hasUppercase = uppercaseEl.checked;
  const hasLowercase = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  const noSelection =
    !hasNumber && !hasSymbol && !hasUppercase && !hasLowercase;

  if (noSelection) {
    alert("Please choose an option!");
    return;
  }

  let passwordCharacters = [];

  if (hasUppercase) {
    passwordCharacters.push(getRandomUpper);
  }
  if (hasLowercase) {
    passwordCharacters.push(getRandomLower);
  }
  if (hasNumber) {
    passwordCharacters.push(getRandomNumber);
  }
  if (hasSymbol) {
    passwordCharacters.push(getRandomSymbol);
  }
console.log(passwordCharacters)
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomCharacter =
    passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]();
    password = password + randomCharacter;
  }

  resultEl.textContent = password;
});

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
