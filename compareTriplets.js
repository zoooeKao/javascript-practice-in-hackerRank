// - Function Description
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// - Example
// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

/*
 * Complete the 'compareTriplets' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
/**
 * @param {number[]} a - Alice 的分數陣列，包含 3 個數字。
 * @param {number[]} b - Bob 的分數陣列，包含 3 個數字。
 * @returns {number[]} - 回傳一個包含兩個整數的陣列。第一個數字代表 Alice 的得分，第二個數字代表 Bob 的得分。
 */
function compareTriplets(a, b) {
  const points = [0, 0];
  a.forEach((_, i) => {
    a[i] > b[i] ? (points[0] += 1) : null;
    a[i] < b[i] ? (points[1] += 1) : null;
  });
  return points;
}
