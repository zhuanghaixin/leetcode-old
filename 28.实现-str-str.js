/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/*
var strStr = function (haystack, needle) {
  if (haystack === needle) return 0;
  let len = needle.length;
  if (len == 0) return 0;
  let res = -1;
  for (let i = 0; i < haystack.length; ++i) {
      if (haystack[i] === needle[0]) {
          //不采用提取子字符串的方法  使用循环比较
          for (let j = 0; j < len; ++j) {
              let n = i + j;
              if (haystack[n] !== needle[j]) {
                  res = -1;
                  break;
              } else {
                  res = i;
              }
          }
          if (res != -1) return res;
      }
  }
  return res;
};
*/

var strStr = function (haystack, needle) {
  var needleL = needle.length;
  if (haystack === needle) return 0;
  if (needleL == 0) return 0;

  let index = -1
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        // let n=i+j
        if (haystack[i + j] !== needle[j]) {
          index = -1
          break;
        } else {
          index = i
          //console.log(index) 有bug
          // console.log(index)
        }

      }
      if (index != -1) return index

    }
  }
  return index
};

console.log(strStr("mississippi", "issi"));
/*
var strStr = function (haystack, needle) {
  if (!needle)
    return 0;
  if (haystack.length < needle.length)
    return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = i
      if (needle.length > haystack.length - i)
        return -1;
      for (j = i; j < needle.length; j++) {
        if (haystack[j] !== needle[j - i]) {
          break;
        }
        if (j === i + needle.length) {
          return i
        }
      }

    }
  }
  return -1;
};
*/

/*
用string.slice() string.substr()思路解决idnexOf
var strStr = function (haystack, needle) {
  var haystackL = haystack.length
  var needleL = needle.length;
  if (!needleL) {
    return 0
  }
  for (var i = 0; i < haystackL; i++) {
    if (haystack.substr(i, needleL) === needle)
    // if (haystack.slice(i, needleL+i) === needle)
      return i
  }
  return -1
};
*/

/*
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
};
*/