/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  var str = '';
  for (var i = 0; i < s.length; i = i + 2 * k) {
    //截取的反转区间
    var haystack = s.substr(i, 2 * k);
    if (haystack.length < k) {
      str += myReverse(haystack);
    } else {
      str += myReverse(haystack.substr(0, k)) + haystack.substr(k);
    }
  }
  return str;
};

function myReverse(str) {
  var arr = str.split('');
  var reversedArr = arr.reverse();
  return reversedArr.join('');
}