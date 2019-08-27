/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */

/*
^开头
\s* 匹配0/多个空字符
[+|-]? 一个或多个字符
\d+ 1个或多个数字

最后匹配下边界大小，代码如下
*/
// var myAtoi = function (str) {
//   let reg = new RegExp(/^\s*[+|-]?\d+/g);

//   if (reg.test(str) == false) {
//     return 0
//   }
//   let num = str.match(reg)[0];

//   return Math.max(Math.min(num, Math.pow(2, 31) - 1), Math.pow(-2, 31));
// };




var myAtoi = function (str) {
  var num = parseInt(str)
  if (num > 2 ** 31 - 1) {
    num = 2 ** 31 - 1
  } else if (num < -1 * 2 ** 31) {
    num = -1 * 2 ** 31
  } else if (num.toString() === 'NaN') {
    num = 0
  }
  return num


};