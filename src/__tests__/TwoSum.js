const { twoSum } = require('../TwoSum');

test('returns [0,1] from arr', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
test('returns [1,2] from arr', () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});
