const { performance } = require('perf_hooks');

// naive solution

function same(first, second) {
  if (first.length === second.length) {
    first.sort((a, b) => a - b);
    second.sort((a, b) => a - b);

    for (let i = 0; i < first.length; i++) {
      if (Math.pow(first[i], 2) !== second[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let freq1 = {},
    freq2 = {};

  for (let val of str1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of str2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  // why does for of break, but for in does not
  for (let letter in freq1) {
    if (freq1[letter] !== freq2[letter]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('noonie', 'onione'));
console.log(validAnagram('cupc', 'cuup'));
console.log(validAnagram('cinema', 'iceman'));
