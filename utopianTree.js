// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?
// For example, if the number of growth cycles is n=5 , the calculations are as follows:

// - Function Description
// Complete the utopianTree function in the editor below.
// utopianTree has the following parameter(s):
// int n: the number of growth cycles to simulate

// - Returns
// int: the height of the tree after the given number of cycles

/*
 * Complete the 'utopianTree' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

/**
 * @param {number} n 此樹會有幾個週期
 * @returns {number} 樹高
 */
function utopianTree(n) {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      height *= 2;
    } else {
      height += 1;
    }
  }

  return height;
}
