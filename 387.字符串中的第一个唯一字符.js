/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if(s.length===1){
    return 0
  }else{
    for (let i = 0; i < s.length; i++) {
      if (s.lastIndexOf(s[i]) === i  && s.indexOf(s[i])===i) {
        console.log(i);
        console.log(s[i])
        return i
      }
    }

  }

  return -1
};
console.log(firstUniqChar("aadadaad"));
