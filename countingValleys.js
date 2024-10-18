// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// - Example
// steps = 8
// path = [DDUUUUDD]
// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

// - Function Description
// Complete the countingValleys function in the editor below.
// countingValleys has the following parameter(s):
// int steps: the number of steps on the hike
// string path: a string describing the path

// - Returns
// int: the number of valleys traversed

// - Sample Input
// 8
// UDDDUDUU

// - Sample Output
// 1

/*
 * Complete the 'countingValleys' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps 12
 *  2. STRING path DDUUDDUDUUUD
 */

/**
 * @param {number} steps 總步數
 * @param {number[]} path 紀錄上坡及下坡
 * @returns {number} 統計經過山谷的次數
 */
function countingValleys(steps, path) {
  let altitude = /** @type {number} */ (0);
  let numberOfValleys = /** @type {number} */ (0);

  for (const track of path) {
    if (track === 'D') {
      altitude = altitude - 1;
    }
    if (track === 'U') {
      altitude = altitude + 1;
      if (altitude === 0) {
        numberOfValleys += 1;
      }
    }
  }

  return numberOfValleys;
}
