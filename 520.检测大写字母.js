/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toLowerCase() === word) {
    return true
  }
  var firstChar = word[0]
  console.log(firstChar);
  var restChars = word.slice(1)
  console.log(restChars);
  if (firstChar.toUpperCase() === firstChar && (restChars.toUpperCase() === restChars || restChars.toLowerCase() === restChars)) {
    return true
  }
  return false
};
console.log(detectCapitalUse("USA"));
