import CATEGORIES from "../constants/Categories.json";

const { uppercase, lowercase, numbers, symbols } = CATEGORIES;

export const generatePassword = (options, length) => {
  const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
  let password = "";

  if(includeUppercase) {
    password += getRandomElement(uppercase);
  }
  if(includeLowercase) {
    password += getRandomElement(lowercase);
  }
  if(includeNumbers) {
    password += getRandomElement(numbers);
  }
  if(includeSymbols) {
    password += getRandomElement(symbols);
  }

  const remainingLength = length - password.length;

  if(remainingLength < 0) {
    password = shuffleString(password);
    return password.slice(0, length);
  }

  for (let i = 0; i < remainingLength; i++) {
    password += getRandomElement(getRandomCategory(options));
  }
  
  return shuffleString(password);
};

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const getRandomCategory = options => {
  const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
  const categories = [];

  if(includeUppercase) {
    categories.push(uppercase);
  }
  if(includeLowercase) {
    categories.push(lowercase);
  }
  if(includeNumbers) {
    categories.push(numbers);
  }
  if(includeSymbols) {
    categories.push(symbols);
  }

  return getRandomElement(categories);
};

export const shuffleString = string => {
  const array = string.split("");

  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.join("");
};