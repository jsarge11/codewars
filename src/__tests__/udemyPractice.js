const {
  sameFrequency,
  areThereDuplicates,
  averagePair,
  isSubsequence,
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
