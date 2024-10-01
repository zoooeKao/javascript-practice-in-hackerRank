// - Function Description
// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
// aVeryBigSum has the following parameter(s):
// int ar[n]: an array of integers .

// - Return
// long: the sum of all array elements

// - Input Format
// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// - Output Format
// Return the integer sum of the elements in the array.

/*
 * Complete the 'aVeryBigSum' function below.
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

/**
 * @param {[]} ar
 * @returns {number} - 回傳整數陣列中所有數字的總和。
 */
function aVeryBigSum(ar) {
  // method 1:
  // let sum = 0;
  // for (let item of ar) {
  //   sum += item;
  // }
  // return sum;

  // method 2:
  return ar.reduce((sum, curr) => {
    return (sum += curr);
  });
}
