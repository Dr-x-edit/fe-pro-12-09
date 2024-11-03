export function uppercase(userInput) {
  return userInput.toUpperCase();
}

export function reverseString(userInput) {
  let [...u] = userInput;
  return u.reverse().join("");
}
