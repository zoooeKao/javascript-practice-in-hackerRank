// - Function Description
// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.
// getTotalX has the following parameter(s):
// int a[n]: an array of integers
// int b[m]: an array of integers

// - Returns
// int: the number of integers that are between the sets

// - Input Format
// The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
// The second line contains n distinct space-separated integers a[i] where 0 <= i < n.
// The third line contains m distinct space-separated integers b[j] where <= j < m.

/*
 * Complete the 'getTotalX' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

/**
 * 計算介於 a 陣列最大值到 b 陣列最小值中，同時是 a 陣列所有元素的公倍數也是 b 陣列所有元素的公因數
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number} 符合條件的個數
 */
function getTotalX(a, b) {
  let result = 0;
  const maxA = Math.max(...a);
  const minB = Math.min(...b);
  for (let num = maxA; num <= minB; num++) {
    if (a.every((item) => num % item === 0)) {
      if (b.every((item) => item % num === 0)) {
        result++;
      }
    }
  }
  return result;
}
