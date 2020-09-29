const tryOnSubstring = (s) => {
  let arr = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
      count++;
    } else {
      break;
    }
  }
  // start at position 0 in the string
  // check if array has letter
  // if not, add to array
  // if so, exit sequence, return count
  // if biggest count is bigger than current minus remaining, don't run.
  // start at position 1, repeat.
  // return biggest count
  return count;
};

var lengthOfLongestSubstring = function (s) {
  if (s === '') {
    return 0;
  }
  let counts = [];
  for (let i = 0; i < s.length; i++) {
    counts.push(tryOnSubstring(s.substr(i, s.length)));
  }

  console.log(Math.max.apply(null, counts));

  return Math.max.apply(null, counts);
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
