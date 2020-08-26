const { solution } = require('../RomanNumerals');

describe('converts small numbers', () => {
  test.each`
    input | result
    ${1}  | ${'I'}
    ${2}  | ${'II'}
    ${3}  | ${'III'}
    ${4}  | ${'IV'}
    ${5}  | ${'V'}
    ${9}  | ${'IX'}
    ${10} | ${'X'}
    ${11} | ${'XI'}
    ${19} | ${'XIX'}
    ${22} | ${'XXII'}
    ${15} | ${'XV'}
  `('converts $input to $result', ({ input, result }) => {
    expect(solution(input)).toBe(result);
  });
});
