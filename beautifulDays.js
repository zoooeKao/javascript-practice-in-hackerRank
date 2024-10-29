// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.
// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
// Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

// - Function Description
// Complete the beautifulDays function in the editor below.
// beautifulDays has the following parameter(s):
// int i: the starting day number
// int j: the ending day number
// int k: the divisor

// - Returns
// int: the number of beautiful days in the range

// - Sample Input
// 20 23 6

// - Sample Output
// 2

/*
 * Complete the 'beautifulDays' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

/**
 * @param {number} i 起始數
 * @param {number} j 終點數
 * @param {number} k 除數
 * @returns {number} 計算有幾個數可以整除除數
 */
function beautifulDays(i, j, k) {
  let count = 0;
  for (let day = i; day <= j; day++) {
    const converse = Number(String(day).split('').reverse().join(''));
    if (Math.abs(day - converse) % k === 0) {
      count++;
    }
  }
  return count;
}
