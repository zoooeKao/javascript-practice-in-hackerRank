// - Function Description
// Complete the breakingRecords function in the editor below.
// breakingRecords has the following parameter(s):
// int scores[n]: points scored per game

// - Returns
// int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

// - Sample Input
// 9
// 10 5 20 20 4 5 2 25 1

// - Sample Output
// 2 4

/*
 * Complete the 'breakingRecords' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

/**
 * 計算創新高的次數以及創新低的次數
 * @param {number[]]} scores 成績列
 * @returns {number[]} 有兩個元素，第一個是創新高的次數，第二個是創新低的次數
 */
function breakingRecords(scores) {
  // Write your code here
  let result = [0, 0];
  let highestScore = scores[0];
  let lowestScore = scores[0];
  for (const score of scores) {
    if (score > highestScore) {
      result[0] += 1;
      highestScore = score;
    }
    if (score < lowestScore) {
      result[1] += 1;
      lowestScore = score;
    }
  }
  return result;
}
