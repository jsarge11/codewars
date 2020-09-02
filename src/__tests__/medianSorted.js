const { findMedianSortedArrays } = require('../bytebybyte/recursionOne');

it('returns the right thing', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});
it('returns the right thing', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});
it('returns the right thing', () => {
  expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
});
it('returns the right thing', () => {
  expect(findMedianSortedArrays([], [0, 0])).toBe(0);
});
it('returns the right thing', () => {
  expect(findMedianSortedArrays([], [1])).toBe(1);
});
it('returns the right thing', () => {
  expect(findMedianSortedArrays([], [1, 2, 3, 4, 5])).toBe(3);
});
