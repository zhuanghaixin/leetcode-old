/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false
  }
  if (n === 1) {
    return true
  }
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      return false
    }
  }
  return true
};