/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*解决方法一
var subsets = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [
  []
]);
*/


var subsets = function powerSet(str) {
  var obj = {}
  //这个循环是取出所有重复的数字/字母
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = true;
  }
  //这时变量数组没有重复项
  var array = Object.keys(obj);
  var result = [
    []
  ];

  for (var i = 0; i < array.length; i++) {
    var len = result.length;
    //每次循环，将最后一个数组项与前面几个组合
    for (var x = 0; x < len; x++) {
      result.push(result[x].concat(array[i]))
    }
  }
  return result;
}

/*

用回溯算法，目前还不会
*/