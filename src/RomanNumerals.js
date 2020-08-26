// mapped the keys
const keys = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function solution(number) {
  let final = '';
  for (let key in keys) {
    while (number >= keys[key]) {
      final += key;
      number -= keys[key];
    }
  }

  return final;
  // add to constant, while removing from number. This works because because roman numerals are built from left to right
}

exports.solution = solution;
