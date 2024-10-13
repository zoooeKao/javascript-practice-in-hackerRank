// - Function Description
// Complete the divisibleSumPairs function in the editor below.
// divisibleSumPairs has the following parameter(s):
// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor

// - Returns
// int: the number of pairs

// - Input Format
// The first line contains 2 space-separated integers, n and k.
// The second line contains n space-separated integers, each a value of arr[i].

/*
 * Complete the 'divisibleSumPairs' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n eg.6
 *  2. INTEGER k eg.3
 *  3. INTEGER_ARRAY ar eg.[1, 3, 2, 6, 1, 2]
 */

/**
 * @param {number} n ar的長度
 * @param {number} k 除數
 * @param {array[number]} ar
 * @returns {number} 可以配對成功整除k的組數
 */
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (i === j) continue;
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count / 2;
}
