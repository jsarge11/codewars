const { countAndSay } = require('../countAndSay');

describe('returns the correct number', () => {
  test.each`
    input | result
    ${1}  | ${'1'}
    ${2}  | ${'11'}
    ${3}  | ${'21'}
    ${4}  | ${'1211'}
    ${5}  | ${'111221'}
  `(`$input equals $result`, ({ input, result }) => {
    expect(countAndSay(input)).toEqual(result);
  });
});
