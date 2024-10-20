// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start && end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
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

  // for (const track of path) {
  //   if (track === 'D') {
  //     altitude = altitude - 1;
  //   }
  //   if (track === 'U') {
  //     altitude = altitude + 1;
  //     if (altitude === 0) {
  //       numberOfValleys += 1;
  //     }
  //   }
  // }

  // return numberOfValleys;

  let inValley = false;
  if (altitude === 0 && track === 'D') {
    // Kevin: 海平面時開始往下, 表示開始標註這是在山谷裡
    // Kevin: 同時調整高度
    altitude = altitude - 1;
    inValley = true;
  } else if (altitude === -1 && track === 'U') {
    // Kevin: 準備回到海平面, 結束了山谷的標註
    // Kevin: 對目前已經統計的山谷數量加一
    // Kevin: 同時調整高度
    altitude = altitude + 1;
    inValley = false;
    numberOfValleys = numberOfValleys + 1;
  } else if (track === 'D') {
    // Kevin: 因為不是準備從海平面往下或是準備回到海平面, 所以單純調整高度
    altitude = altitude - 1;
  } else {
    // Kevin: 其實這是path[i] = U 的情境
    // Kevin: 描述同上一個情境
    altitude = altitude + 1;
  }

  return numberOfValleys;
}
