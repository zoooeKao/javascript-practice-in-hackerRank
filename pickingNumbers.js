// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// - Example
// a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
// There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.

/**
 * @param {number[]} a
 * @returns {number} 找到相差為1或相等的最長組合
 */
function pickingNumbers(a) {
  let longest = 1;
  for (const i of a) {
    const findTheLongest = a.filter((each) => each === i || each === i - 1).length;
    if (findTheLongest > longest) longest = findTheLongest;
  }
  return longest;
}
