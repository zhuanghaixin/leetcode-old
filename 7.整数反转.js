/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const reversed = x.toString().split('').reverse().join('')
  if (parseInt(reversed) > 2 ** 31 - 1 || parseInt(reversed) < -1 * 2 ** 31) {
    return 0
  } else {
    return parseInt(reversed) * Math.sign(x)
  }

};
