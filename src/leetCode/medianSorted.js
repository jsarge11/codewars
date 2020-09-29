const findMedianSortedArrays = function (nums1, nums2) {
  const newArr = [...nums1, ...nums2].sort((a, b) => a - b);

  if (newArr.length % 2 === 0) {
    const half = newArr.length / 2;
    return (newArr[half - 1] + newArr[half]) / 2;
  } else if (newArr.length > 1) {
    const half = Math.ceil(newArr.length / 2);

    return newArr[half - 1];
  } else {
    return newArr[0];
  }
};

exports.findMedianSortedArrays = findMedianSortedArrays;
