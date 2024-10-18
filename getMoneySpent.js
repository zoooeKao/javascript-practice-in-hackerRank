// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

// - Example
// b = 60
// keyboards = [40, 50, 60]
// drives = [5, 8, 12]
// The person can buy a 40 keyboard + 12 U
// SB drive = 52 , or a 50 keyboard + 8 USB drive = 58. Choose the latter as the more expensive option and return 58.

// - Function Description
// Complete the getMoneySpent function in the editor below.
// getMoneySpent has the following parameter(s):
// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget

// - Returns
// int: the maximum that can be spent, or -1 if it is not possible to buy both items

/*
 * Complete the getMoneySpent function below.
 */

/**
 * @param {number[]} keyboards keyboards的價格列表
 * @param {number[]} drives drives的價格列表
 * @param {number} b 預算
 * @returns {number} 在預算內，keyboard和drive能採買的最高價格合計
 */
function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  for (const keyboard of keyboards) {
    for (const drive of drives) {
      if (keyboard + drive <= b && keyboard + drive > max) {
        max = keyboard + drive;
      }
    }
  }
  return max;
}
