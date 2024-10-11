// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// - Example：
// s=[2,2,1,3,2]
// d=4
// m=2
// Lily wants to find segments summing to Ron's birth day, d=4 with a length equalling his birth month, m=2. In this case, there are two segments meeting her criteria: [2,2] and [1,3].

// - Function Description：
// Complete the birthday function in the editor below.
// birthday has the following parameter(s):
// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month

// - Returns:
// int: the number of ways the bar can be divided

/**
 * m 塊巧克力上數字的加總會剛好等於 d 的可能次數。
 * 該段的長度必須與 Ron 的出生月份相同，並且該段的整數總和必須等於他的生日。
 * @param {number[]} s 巧克力塊的數字
 * @param {number} d 日期
 * @param {number} m 月份
 * @returns {number} 符合條件的次數
 */
function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }
    if (sum === d) {
      count++;
    }
  }

  return count;
}
