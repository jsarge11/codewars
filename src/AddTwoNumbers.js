const traverseList = (l1) => {
  if (!l1.next) {
    return l1.val.toString();
  } else {
    return traverseList(l1.next) + l1.val.toString();
  }
};

const createNewLinkedList = (num) => {
  if (typeof num === 'number') {
    num = num.toString();
  }
  let linkedListArr = [];

  for (let j = num.length - 1; j >= 0; j--) {
    linkedListArr.push({
      val: +num[j],
      next: null,
    });
  }

  linkedListArr.forEach((list, i, arr) => {
    list.next = arr[i + 1] || null;
  });

  return linkedListArr[0];
};

const addTwoNumbers = (l1, l2) => {
  const first = traverseList(l1);
  const second = traverseList(l2);

  const answer = +first + +second;

  return createNewLinkedList(answer);
};

exports.addTwoNumbers = addTwoNumbers;

const num = traverseList({
  val: 4,
  next: {
    val: 5,
    next: null,
  },
});

num;
