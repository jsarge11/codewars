const {
  sameFrequency,
  areThereDuplicates,
  averagePair,
  isSubsequence,
  maxSubarraySum,
  minSubArrayLen,
} = require('../practiceProblems/udemyPractice');

describe('same frequency works', () => {
  test.each`
    input1     | input2     | result
    ${182}     | ${281}     | ${true}
    ${34}      | ${14}      | ${false}
    ${3589578} | ${5879385} | ${true}
    ${22}      | ${222}     | ${false}
    ${42341}   | ${12344}   | ${true}
  `(`returns correct answer`, ({ input1, input2, result }) => {
    expect(sameFrequency(input1, input2)).toBe(result);
  });
});

describe('areThereDuplicates works', () => {
  test('test passes', () => {
    expect(areThereDuplicates('a', 'b', 'c')).toBe(false);
  });
  test('test passes', () => {
    expect(areThereDuplicates(1, 1)).toBe(true);
  });
  test('test passes', () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
  });
  test('test passes', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
  });
  test('test passes', () => {
    expect(areThereDuplicates(1, '1')).toBe(true);
  });
});

describe('averagePairWorks', () => {
  test.each`
    input1                            | input2 | result
    ${[1, 2, 3]}                      | ${2.5} | ${true}
    ${[1, 3, 3, 5, 6, 7, 10, 12, 19]} | ${8}   | ${true}
    ${[-1, 0, 3, 4, 5, 6]}            | ${4.1} | ${false}
    ${[]}                             | ${4}   | ${false}
  `(`returns correct answer`, ({ input1, input2, result }) => {
    expect(averagePair(input1, input2)).toBe(result);
  });
});
describe('isSubsequence works', () => {
  test.each`
    input1     | input2           | result
    ${'hello'} | ${'hello world'} | ${true}
    ${'sing'}  | ${'sting'}       | ${true}
    ${'abc'}   | ${'abracadabra'} | ${true}
    ${'abc'}   | ${'cba'}         | ${false}
  `(`returns correct answer`, ({ input1, input2, result }) => {
    expect(isSubsequence(input1, input2)).toBe(result);
  });
});

describe('maxSubarraySum works', () => {
  test.each`
    input1                             | input 2 | result
    ${[100, 200, 300, 400]}            | ${2}    | ${700}
    ${[1, 4, 2, 10, 23, 3, 1, 0, 20]}  | ${4}    | ${39}
    ${[-3, 4, 0, -2, 6, -1]}           | ${2}    | ${5}
    ${[3, -2, 7, -4, 1, -1, 4, -2, 1]} | ${2}    | ${5}
    ${[2, 3]}                          | ${3}    | ${null}
  `('returns the correct answer', ({ input1, input2, result }) => {
    expect(maxSubarraySum(input1, input2)).toBe(result);
  });
});
describe('minSubarrayLen works', () => {
  test.each`
    input1                                    | input 2 | result
    ${[2, 3, 1, 2, 4, 3]}                     | ${7}    | ${2}
    ${[2, 1, 6, 5, 4]}                        | ${9}    | ${2}
    ${[3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19]} | ${52}   | ${1}
    ${[1, 4, 16, 22, 5, 7, 8, 9, 10]}         | ${39}   | ${3}
    ${[1, 4, 16, 22, 5, 7, 8, 9, 10]}         | ${55}   | ${5}
    ${[4, 3, 3, 8, 1, 2, 3]}                  | ${11}   | ${2}
    ${[1, 4, 16, 22, 5, 7, 8, 9, 10]}         | ${95}   | ${0}
  `('returns the correct answer', ({ input1, input2, result }) => {
    expect(minSubArrayLen(input1, input2)).toBe(result);
  });
});
