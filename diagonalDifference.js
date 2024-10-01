// - Function description
// Complete the  function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers

// - Return
// int: the absolute diagonal difference

// - Input Format
// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// - Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

/*
 * Complete the 'diagonalDifference' function below.
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

/**
 * @param {number[][]} arr - 一個 n x n 的矩陣，內部是數字的陣列。
 * @returns {number} - 回傳一個正整數，代表兩條對角線和的絕對差。
 */
function diagonalDifference(arr) {
  const record = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    record[0] += arr[i][i];
    record[1] += arr[i][arr.length - i - 1];
  }

  return Math.abs(record[0] - record[1]);
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
