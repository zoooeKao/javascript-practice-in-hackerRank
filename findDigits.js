// An integer d is a divisor of an integer  if the remainder of n/d = 0.
// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

// - Example
// n = 124

// Check whether 1, 2 and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.
// n = 111
// Check whether 1, 1, and 1 are divisors of 111. All 3 numbers divide evenly into 111 so return 3.
// n = 10
// Check whether 1 and 0 are divisors of 10. 1 is, but 0 is not. Return 1.

/*
 * Complete the 'findDigits' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

/**
 * @param {number} n 原始資料
 * @returns {number} 回傳能被整除的個數
 */
function findDigits(n) {
  let result = 0;

  String(n)
    .split('')
    .forEach((e) => {
      if (n % e === 0) result += 1;
    });

  return result;
}
