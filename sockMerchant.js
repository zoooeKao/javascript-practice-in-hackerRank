// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// - Example
// n=7
// ar=[1,2,1,2,1,3,2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

/*
 * Complete the 'sockMerchant' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
/**
 * 計算有幾雙成對的襪子
 * @param {number} n 共有幾隻襪子 9
 * @param {number[]} ar 每隻襪子的編號 10 20 20 10 10 30 50 10 20
 * @returns {number} 配對成雙的襪子
 */
function sockMerchant(n, ar) {
  const statisticTable = {};
  let pairs = 0;

  for (const sockNo of ar) {
    if (!statisticTable[sockNo]) {
      statisticTable[sockNo] = 1;
    } else {
      statisticTable[sockNo] += 1;
    }
  }

  if (statisticTable[sockNo] % 2 === 0) {
    pairs++;
  }

  return pairs;
}
