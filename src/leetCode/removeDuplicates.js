function removeDuplicates(nums) {
  let obj = {};
  nums = nums.filter((item) => {
    if (obj.hasOwnProperty(item)) {
      return false;
    } else {
      obj[item] = '';
      return true;
    }
  });

  return nums.length;
}

console.log(removeDuplicates([1, 1, 2]));
