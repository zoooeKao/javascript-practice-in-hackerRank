// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.

// - Example
// height=[1,2,3,3,2]
// k=1
// The character can jump 1 unit high initially and must take 3-1=2 doses of potion to be able to jump all of the hurdles.

/*
 * Complete the 'hurdleRace' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

/**
 * @param {number} k 最初能跳得最高高度
 * @param {[]number} height 每次跨欄的高度
 * @return {number} 需要服用多少藥劑方能跳完跨欄
 */
function hurdleRace(k, height) {
  const max = Math.max(...height);
  if (k >= max) {
    return 0;
  } else {
    return max - k;
  }
}
