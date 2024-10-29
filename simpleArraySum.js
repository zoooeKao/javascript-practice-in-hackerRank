// - Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// ar: an array of integers

// - Input Format
// The first line contains an integer, n, denoting the size of the array.
// The second line contains n space-separated integers representing the array's elements.

// - Output Format
// Print the sum of the array's elements as a single integer.

// - Sample Input
// 6
// 1 2 3 4 10 11

/*
 * Complete the 'simpleArraySum' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  return ar.reduce((acc, cur) => acc + cur);
}
