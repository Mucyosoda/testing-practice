const strings = (string) => {
  let stringArr = string.trim().split('');
  let number = 0;
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === ' ') continue;
    if (stringArr[i] !== ' ') {
      number++;
    }
  }
  if (number > 0 && number <= 10) {
    return number;
  } else {
    return 'error!!!';
  }
};
module.exports = strings;
