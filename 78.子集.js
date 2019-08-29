/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [
  []
]);