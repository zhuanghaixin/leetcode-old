/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */
/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  return s.split(/\s/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
};
// export default (str)=>{
//   //字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词顺序
//   let arr=str.split(' ')
//   //对数组进行遍历，每个数组进行反转
//   let result=arr.map(item=>{
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// export default (str)=>{
//   //字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词顺序
//   //对数组进行遍历，每个数组进行反转
//   return str.split(' ').map(item=>{
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str)=>{
//     //字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词顺序
//     //对数组进行遍历，每个数组进行反转
//     return str.split(/\s/g).map(item=>{
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

// export default (str)=>{
//     //字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词顺序
//     //对数组进行遍历，每个数组进行反转
//     return str.match(/[\w']+/g).map(item=>{
//         return item.split('').reverse().join('')
//     }).join(' ')
// }
