// - Function Description
// Complete the function kangaroo in the editor below.
// kangaroo has the following parameter(s):
// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2

// - Example
// x1 = 2, v1 = 1, x2 = 1, v2 = 2
// After one jump, they are both at x = 3 ,(x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so the answer is YES.

// - Returns
// string: either YES or NO

// - Input Format
// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

/*
 * Complete the 'kangaroo' function below.
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1 0 0
 *  2. INTEGER v1 3 2
 *  3. INTEGER x2 4 5
 *  4. INTEGER v2 2 3
 */

/**
 * @param {number} x1 第一隻兔子的起點
 * @param {number} v1 第一隻兔子每一跳的距離
 * @param {number} x2 第二隻兔子的起點
 * @param {number} v2 第二隻兔子每一跳的距離
 * @returns {'YES' | 'NO'} 兩隻兔子在第 N 次跳躍後會相遇回傳 YES ，否則回傳 NO
 */
function kangaroo(x1, v1, x2, v2) {
  // x1 + v1 * Y = x2 + v2 * Y
  // x1 - x2 = (v2 - v1) * Y
  // 當 Y 是正整數時回傳 'YES'，否則回傳 'NO'
  if ((x1 - x2) / (v2 - v1) > 0 && Number.isInteger((x1 - x2) / (v2 - v1))) {
    return 'YES';
  }
  return 'NO';
}
