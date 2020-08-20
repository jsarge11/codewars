const { revrot } = require('../reverseOrRotate');

test('returns empty string when passed incorrect values', () => {
  expect(revrot('1234', 0)).toBe('');
  expect(revrot('', 0)).toBe('');
  expect(revrot('1234', 5)).toBe('');
});

test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '123456987654';
  expect(revrot(s, 6)).toBe('234561876549');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
test('returns correct value', () => {
  const s = '733049910872815764';
  expect(revrot(s, 5)).toBe('330479108928157');
});
