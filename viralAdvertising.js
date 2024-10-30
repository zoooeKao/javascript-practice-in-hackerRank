// HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.

// On the first day, half of those 5 people (i.e., floor(5/2)=2 like the advertisement and each shares it with 3 of their friends. At the beginning of the second day,
// floor(5/2)=2×3=6 people receive the advertisement. Each day, floor(recipients/2) of the recipients like the advertisement and will share it with 3 friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.

// - Sample Input
// 3

// - Sample Output
// 9

/*
 * Complete the 'viralAdvertising' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

/**
 * @param {number} n 廣告投放天數
 * @returns {number} 觸及廣告的人數
 */
function viralAdvertising(n) {
  const half = 2;
  const share = 3;
  let peopleObserve = 5;
  let calc = 0;
  for (let i = 1; i < n + 1; i++) {
    const like = Math.floor(peopleObserve / half);
    calc += like;
    peopleObserve = like * share;
  }
  return calc;
}
