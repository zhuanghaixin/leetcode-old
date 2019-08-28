/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
/*
var firstUniqChar = function (s) {
  for (let v of s) {
    if (s.indexOf(v) === s.lastIndexOf(v)) {
      return s.indexOf(v);
    }
  }
  return -1;
};
*/


var firstUniqChar = function (s) {

  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) {
      return i
    }
  }



  return -1
};


//hash算法
/*
var firstUniqChar = function(s) {
    let hash = new Map()
    
    for(let i = 0; i < s.length; i++) {
        if(hash.has(s[i])) {
            hash.set(s[i], hash.get(s[i]) + 1)
        } else {
            hash.set(s[i], 1)
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(hash.get(s[i]) == 1){
            return i
        }
    }
    return -1
};

*/