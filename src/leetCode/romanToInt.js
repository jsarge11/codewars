const nines = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
const totals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let num = 0;

  let skipNext = false;
  for (let i = 0; i < s.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }
    const letter = s[i];
    const nextLetter = s[i + 1];

    if (letter === 'I') {
      if (nextLetter === 'X' || nextLetter === 'V') {
        console.log(letter + nextLetter);
        num += nines[letter + nextLetter];
        skipNext = true;
        continue;
      }
    }
    if (letter === 'X') {
      if (nextLetter === 'L' || nextLetter === 'C') {
        num += nines[letter + nextLetter];
        skipNext = true;
        continue;
      }
    }
    if (letter === 'C') {
      if (nextLetter === 'D' || nextLetter === 'M') {
        num += nines[letter + nextLetter];
        skipNext = true;
        continue;
      }
    }

    num += totals[letter];
  }

  return num;
};
