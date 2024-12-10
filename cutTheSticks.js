// @ts-check

// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
// Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

// - Example
// arr = [1, 2, 3]
// The shortest stick length is 1, so cut that length from the longer two and discard the pieces of length 1. Now the lengths are arr = [1, 2, 3]. Again, the shortest stick is of length , so cut that amount from the longer stick and discard those pieces. There is only one stick left, arr = [1], so discard that stick. The number of sticks at each iteration are answer = [3, 2, 1].

// - Function Description
// Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number of sticks before each cut operation is performed.
// cutTheSticks has the following parameter(s):
// int arr[n]: the lengths of each stick

/**
 * @param {number[]} arr 題目資料
 * @returns {number[]}
 */
function cutTheSticks(arr) {
  const result = [];
  while (arr.length > 0) {
    result.push(arr.length);
    const min = Math.min(...arr);
    arr = arr.map((e) => e - min).filter((e) => e !== 0);
  }
  return result;
}
