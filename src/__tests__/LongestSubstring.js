const { lengthOfLongestSubstring } = require('../LongestSubstring');

test('passes', () => {
  expect(lengthOfLongestSubstring('')).toBe(0);
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});
