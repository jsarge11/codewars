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

function maxSubarraySum(arr, length) {
  // grab the sum of the amt of digits

  // minus the first, add the next

  // compare max, reassign if necessary

  if (arr.length < length) return null;

  let temp = 0;
  let max = 0;
  // what is the max of the first n numbers
  for (let i = 0; i < length; i++) {
    max += arr[i];
  }

  // just in case the first four are the max
  temp = max;

  for (let j = length; j < arr.length; j++) {
    temp = temp - arr[j - length] + arr[j];
    max = Math.max(max, temp);
  }

  return max;
}

// positive integers
// positive integer
// return the smallest array length where the sum is greater than or equal to integer

// if sum is greater than or equal to target
//// subtract first from sum
//// increment first
//// set min to counter if smaller
//// reset counter
// else
//// add sum of last to sum
//// increment last
//// increment counter

function minSubArrayLen(arr, target) {
  let isGreater = false;
  arr.forEach((item) => {
    if (item >= target) {
      isGreater = true;
    }
  });
  if (!isGreater) {
    let min = 0;
    let first = 0;
    let last = 0;
    let counter = 0;
    let sum = 0;
    while (last <= arr.length) {
      if (sum >= target) {
        min = min ? Math.min(min, counter) : counter;
        sum -= arr[first];
        first++;
        counter--;
        console.log(min);
      } else {
        sum += arr[last];
        last++;
        counter++;
      }
    }
    return min;
  } else {
    return 1;
  }
}

exports.maxSubarraySum = maxSubarraySum;
exports.minSubArrayLen = minSubArrayLen;
exports.averagePair = averagePair;
exports.sameFrequency = sameFrequency;
exports.areThereDuplicates = areThereDuplicates;
exports.isSubsequence = isSubsequence;
