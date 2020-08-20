const cubeMe = (n) => {
  return n * n * n;
};

const getIfSumOfCubesIsEven = (str) => {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = +str[i];
    sum += cubeMe(letter);
  }

  return sum % 2 === 0;
};

const shiftNumbersLeft = (str) => {
  const first = str[0];
  let newStr = '';
  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }
  return (newStr += first);
};

const revrot = (str, size) => {
  if (size <= 0 || str === '' || str.length < size) {
    return '';
  } else {
    // always will cut off evenly
    const remainder = str.substr(0, str.length - (str.length % size));
    const chunks = [];
    let string = '';
    let counter = 0;

    for (let i = 0; i < remainder.length; i++) {
      string += remainder[i];
      counter++;
      if (counter === size) {
        if (getIfSumOfCubesIsEven(string)) {
          chunks.push(string.split('').reverse().join(''));
        } else {
          chunks.push(shiftNumbersLeft(string));
        }
        counter = 0;
        string = '';
      }
    }

    return chunks.join('');
  }
};
exports.revrot = revrot;
