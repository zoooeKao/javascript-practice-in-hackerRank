// Submissions	Leaderboard	Discussions	Editorial
// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.
// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

// - Example
// n = 4
// m = 6
// s = 2

// There are 4 prisoners,  pieces of candy and distribution starts at chair 2. The prisoners arrange themselves in seats numbered 1 to 4. Prisoners receive candy at positions 2, 3, 4, 1, 2, 3. The prisoner to be warned sits in chair number 3.

// - Function Description
// Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.
// saveThePrisoner has the following parameter(s):
// int n: the number of prisoners
// int m: the number of sweets
// int s: the chair number to begin passing out sweets from

// Returns
// int: the chair number of the prisoner to warn

/*
 * Complete the 'saveThePrisoner' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

/**
 * @param {number} n 囚犯數
 * @param {number} m 糖果顆數
 * @param {number} s 從第幾位囚犯開始傳遞糖果
 * @return {number} 最後一顆糖果是落在哪一位囚犯
 */
function saveThePrisoner(n, m, s) {
  const mod = (s + m - 1) % n;
  if (mod === 0) {
    return n;
  }
  return mod;
}
