/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  var romanStr = ''
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
  for (let i in s) {
    console.log(i)
  }
  for (var x in Roman) {
    debugger;
    console.log(x);
    while (s.includes(x)) {
      romanStr = romanStr + x
      console.log(romanStr);
      console.log(x);
      console.log(s);
      s = deleteStr(s, x)
      console.log(s);
      console.log(romanStr);
      console.log(Roman[x]);
      total = total + Roman[x]
      console.log(total);
    }


  }
  return total
};

var deleteStr = function (str, s) {

  var i = str.indexOf(s)
  var arr = str.split('')
  arr.splice(i, s.length)
  console.log(arr);
  var strDelete = arr.join('')
  return strDelete
  console.log(strDelete);

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