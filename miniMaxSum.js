// - Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of  integers

// - Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// - Input Format
// A single line of five space-separated integers.

// - Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

/*
 * Complete the 'miniMaxSum' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/**
 * 計算最小值和最大值的總和
 * @param {number[]} arr
 */
function miniMaxSum(arr) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  if (arr.every((item) => item === arr[0])) {
    console.log(totalSum - arr[0], totalSum - arr[0]);
  } else {
    console.log(minSum, maxSum);
  }
}
// miniMaxSum([5, 5, 5, 5, 5]); //=>20 20
// miniMaxSum([1, 3, 5, 7, 9]); //=>16 24
