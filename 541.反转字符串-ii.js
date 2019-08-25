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
/*

这道反转字符串其实很简单，但是当时想了很久， 主要是最开始把代码很杂乱的写在一块，而没有用函数的形式进行编写

将字符串反转
反转有条件限制，haystack<k, k<haystack<2k 两个条件，各反转多少（if/else)
然后是每两2k字符进行翻转，（用到for循环递增）
用字符串拼接即可
之前想的使用用数组怎么解决，但这就很麻烦，需要将字符串变成数组，然后遇到这个扁平化数组问题


*/

//扁平化嵌套数组
//可以使用 flat()
// var flattenDeep=function(arr1) {
//     return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }