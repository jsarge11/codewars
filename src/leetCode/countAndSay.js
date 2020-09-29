const countAndSay = (n) => {
  if (n === 1) {
    return '11';
  } else {
    return countAndSay(n - 1) + '1';
    //  recursively return something
  }
};

exports.countAndSay = countAndSay;
