// The factorial of the integer n, written n!, is defined as:
// n! = n x (n-1) x (n-2) x ... x 3 x 2 x 1
// Calculate and print the factorial of a given integer.
// For example, if n = 30, we calculate 30 x 29 x 28 x ... x 2 x 1.

/*
 * Complete the 'extraLongFactorials' function below.
 * The function accepts INTEGER n as parameter.
 */

/**
 * @param {number} n 原始資料
 * @returns {number} n階的結果
 */
function extraLongFactorials(n) {
  let result = n;
  for (let i = 1; i < n; i++) {
    result = result * (n - i);
  }
  return result;
}
