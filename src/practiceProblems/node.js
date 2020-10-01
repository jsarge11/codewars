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
let arr = [];
arr.push(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
arr.push(minSubArrayLen([2, 1, 6, 5, 4], 7));
arr.push(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));

console.log(arr);
