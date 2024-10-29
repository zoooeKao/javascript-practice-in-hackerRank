// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).
// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

// - Example
// n = 5
// k = 3
// a = [-2, -1, 0, 1, 2]
// The first 3 students arrived on. The last 2 were late. The threshold is  students, so class will go on. Return YES.

/*
 * Complete the 'angryProfessor' function below.
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

/**
 * @param {number} k 最少需有幾位學生準時出席
 * @param {*} a 學生抵達課堂的時間，負數為提早抵達、正數為遲到
 * @returns {'NO'|'YES'} 當準時學生數大於等於 K 時，回傳 'NO';反之亦然。
 */
function angryProfessor(k, a) {
  let count = 0;
  for (const student of a) {
    if (student <= 0) {
      count++;
    }
  }
  return count >= k ? 'NO' : 'YES';
}
