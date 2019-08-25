/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
//1.这道题首先将罗马数字与整数的对应情况用hash列出来，从双字母到单字母
//2.对hash进行遍历，用while循环 看输入的罗马字符串中是否能匹配上hash的某一项，匹配一个就将字符串删减，同时将算的整数进行叠加
//总感觉两次循环太浪费了,试了两个多小时，太菜了
var romanToInt = function (s) {
  var total = 0
  var Roman = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900,
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  for (var x in Roman) {
    while (s.includes(x)) {
      s = deleteStr(s, x)
      total = total + Roman[x]
    }
  }
  return total
};
//从字符串中删除某个字符串
var deleteStr = function (str, s) {
  var i = str.indexOf(s)
  var arr = str.split('')
  arr.splice(i, s.length)
  var strDelete = arr.join('')
  return strDelete

}

romanToInt("MCMXCIV")
/*
正则解法
var romanToInt = function (s) {
  const romaMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  }
  let result = 0
  const romaSplit = s.match(/(CM)|(CD)|(XC)|(XL)|(IX)|(IV)|(IX)|(\w)/g)
  for (const v of romaSplit) {
    result += romaMap[v]
  }
  return result
};

*/


/*
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let re = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      re = re - obj[s[i]]
    } else {
      re += obj[s[i]]
    }
  }
  return re

};
*/

/*
var romanToInt = function(s) {
    var Json = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    var arr = s.split('');
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] + arr[i + 1]) in Json) {
            num += Json[arr[i] + arr[i + 1]]
            i++;
        } else {
            num += Json[arr[i]];
        }
    }
    return num;
};
*/