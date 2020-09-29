// const { performance } = require('perf_hooks');

// function countUniqueValues(arr) {
//   let frequencyObject = {};
//   arr.forEach((item) => {
//     frequencyObject[item] = (frequencyObject[item] || 0) + 1;
//   });
//   return Object.keys(frequencyObject).length;
// }

function countUniqueValues(arr) {
  if (arr.length < 2) return arr.length;

  let first = 0,
    second = 1;

  for (let i = 0; i < arr.length; i++) {
    // compare values
    if (arr[first] === arr[second]) {
      second++;
    } else {
      first++;
      arr[first] = arr[second];
      second++;
    }
    console.log(first, second);
  }

  return first;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]) === 2);
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7);
console.log(countUniqueValues([]) === 0);
console.log(countUniqueValues([-2, -1, -1, 0, 1]) === 4);
