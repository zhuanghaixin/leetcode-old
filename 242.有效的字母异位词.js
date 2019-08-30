/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (stringA, stringB) {
  var newStringA = stringA.toLowerCase().split('').sort().join('')
  console.log(newStringA);
  var newStringB = stringB.toLowerCase().split('').sort().join('')
  console.log(newStringB);

  return newStringA === newStringB
};