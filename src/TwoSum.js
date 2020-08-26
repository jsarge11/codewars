// are they in order?
// will they always be next to eachother?

const twoSum = (nums, target) => {
  // for loop
  // inside for loop

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
    console.log(i);
  }
};

exports.twoSum = twoSum;
