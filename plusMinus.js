// - Function Description
// Complete the plusMinus function in the editor below.
// plusMinus has the following parameter(s):
// int arr[n]: an array of integers

// - Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// - Input Format
// The first line contains an integer, n, the size of the array.
// The second line contains  space-separated integers that describe .

// - Output Format
// Print the following  lines, each to  decimals:
// proportion of positive values
// proportion of negative values
// proportion of zeros

/*
 * Complete the 'plusMinus' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/**
 * @param {[]} arr 輸入的原始資料
 */
function plusMinus(arr) {
  const int = arr.filter((e) => e > 0);
  const min = arr.filter((e) => e < 0);
  const zero = arr.filter((e) => e === 0);
  const div = (subArr) => (subArr.length / arr.length).toFixed(6);
  console.log(div(sumArr(int)));
  console.log(div(sumArr(min)));
  console.log(div(sumArr(zero)));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
