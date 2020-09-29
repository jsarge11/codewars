function sameFrequency(first, second) {
  // create a counter object to track numbers
  let counterObj = {};
  let counterObj2 = {};
  let firstString = first.toString();
  let secondString = second.toString();

  for (let letter of firstString) {
    counterObj[letter] = (counterObj[letter] || 0) + 1;
  }
  for (let letter of secondString) {
    counterObj2[letter] = (counterObj2[letter] || 0) + 1;
  }

  for (let key in counterObj) {
    if (counterObj[key] !== counterObj2[key]) {
      return false;
    }
  }

  return true;
}
function areThereDuplicates() {
  // create a counter object to track numbers
  let counterObj = {};

  for (let key of arguments) {
    counterObj[key] = (counterObj[key] || 0) + 1;
  }

  for (let key in counterObj) {
    if (counterObj[key] > 1) {
      return true;
    }
  }

  return false;
}
function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (target === avg) {
      return true;
    } else if (avg < target) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

function isSubsequence(substr, str) {
  // start both pointers at beginning of each string
  let shortPtr = 0;

  for (let longPtr = 0; longPtr < str.length; longPtr++) {
    if (str[longPtr] === substr[shortPtr]) {
      shortPtr++;
    }
    if (shortPtr === substr.length) {
      return true;
    }
  }

  return false;
}

exports.averagePair = averagePair;
exports.sameFrequency = sameFrequency;
exports.areThereDuplicates = areThereDuplicates;
exports.isSubsequence = isSubsequence;
