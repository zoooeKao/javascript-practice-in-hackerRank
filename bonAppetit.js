// - Function Description
// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.
// bonAppetit has the following parameter(s):
// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// - Input Format
// The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat.
// The second line contains n space-separated integers bill[i] where 0<=i<n .
// The third line contains an integer, b, the amount of money that Brian charged Anna for her share of the bill.

// - Output Format:
// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., charge-actual) that Brian must refund to Anna. This will always be an integer.
/*
 * Complete the 'bonAppetit' function below.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

/**
 * @param {number[]} bill
 * @param {number} k
 * @param {number} b
 */
function bonAppetit(bill, k, b) {
  const actualShare = (bill.reduce((sum, item) => sum + item, 0) - bill[k]) / 2;

  if (actualShare === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - actualShare);
  }
}
