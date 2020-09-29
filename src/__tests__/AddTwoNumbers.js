const { addTwoNumbers } = require('../leetCode/AddTwoNumbers');

const l1 = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 7,
    },
  },
};
const l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

const ans = {
  val: 5,
  next: {
    val: 4,
    next: {
      val: 1,
      next: {
        val: 1,
        next: null,
      },
    },
  },
};

it('returns l1', () => {
  expect(addTwoNumbers(l1, l2)).toStrictEqual(ans);
});
