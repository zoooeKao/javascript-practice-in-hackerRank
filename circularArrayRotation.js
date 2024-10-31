// John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.
// For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

// - Example
// a = [3,4,5]
// k = 2
// queries = [1,2]

// Here k is the number of rotations on a, and queries holds the list of indices to report. First we perform the two rotations: [3,4,5]->[5,3,4]->[4,5,3]
// Now return the values from the zero-based indices 1 and 2 as indicated in the queries array.
// a[1] = 5
// a[2] = 3

// - Function Description
// Complete the circularArrayRotation function in the editor below.
// circularArrayRotation has the following parameter(s):
// int a[n]: the array to rotate
// int k: the rotation count
// int queries[1]: the indices to report

// - Returns
// int[q]: the values in the rotated  as requested in

/*
 * Complete the 'circularArrayRotation' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

/**
 * @param {number[]} a 原始資料
 * @param {number} k 翻轉次數
 * @param {number[]} queries 要查詢的索引
 * @returns {number[]} 查詢索引應對的值
 */
function circularArrayRotation(a, k, queries) {
  const n = a.length;
  k = k % n;

  const result = [];

  for (const query of queries) {
    result.push(a[(query - k + n) % n]);
  }

  return result;
}
