/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var arr = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
      arr.push("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("buzz");
      arr.push("Buzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
      arr.push("Fizz")
    } else {
      console.log(i)
      arr.push(i.toString())
    }

  }
  console.log(arr);
  return arr
};
fizzBuzz(15)