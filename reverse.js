const reverseString = (string) => {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') continue;
    if (string[i] !== ' ') {
      stack.push(string[i]);
    }
  }
  let reversedString = '';
  while (stack.length > 0) {
    reversedString += stack.pop();
  }
  return reversedString;
};
module.exports = reverseString;
