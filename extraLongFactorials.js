// The factorial of the integer n, written n!, is defined as:
// n! = n x (n-1) x (n-2) x ... x 3 x 2 x 1
// Calculate and print the factorial of a given integer.
// For example, if n = 30, we calculate 30 x 29 x 28 x ... x 2 x 1.

/*
 * Complete the 'extraLongFactorials' function below.
 * The function accepts INTEGER n as parameter.
 */

/**
 * 計算 n 階的結果
 * @param {number} n 原始資料
 */
function extraLongFactorials(n) {
  let result = BigInt(1);
  for (let i = 1; i <= n; i++) {
    result = result * BigInt(i);
  }
  console.log(result.toString());
}
