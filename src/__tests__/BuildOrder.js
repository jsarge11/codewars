const { BuildOrder } = require('../BuildOrder');

test('fails if no package is a standalone', () => {
  expect(BuildOrder([[], [0], [0], [1, 2], [3]])).toStrictEqual([
    0,
    1,
    2,
    3,
    4,
  ]);
});
test('returns correct build order', () => {
  expect(BuildOrder([[], [0], [0], [1, 2], [3]])).toStrictEqual([
    0,
    1,
    2,
    3,
    4,
  ]);
});
