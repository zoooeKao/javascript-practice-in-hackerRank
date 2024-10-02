// - Function Description
// Complete the staircase function in the editor below.
// staircase has the following parameter(s):
// int n: an integer
// Print
// Print a staircase as described above.

// - Input Format
// A single integer, , denoting the size of the staircase.

// - Output Format
// Print a staircase of size  using # symbols and spaces.
// Note: The last line must have  spaces in it.

/*
 * Complete the 'staircase' function below.
 * The function accepts INTEGER n as parameter.
 */

/**
 * @param {number} n 樓梯的樓層數以及底層的個數
 */
function staircase(n) {
  // method 1:
  Array.from({length: n}, (_, i) =>
    console.log(
      Array.from({length: i + 1})
        .fill('#')
        .join('')
        .padStart(n)
    )
  );
  // method 2:
  for (let i = 1; i < n + 1; i++) {
    console.log('#'.repeat(i).padStart(n));
  }
}
