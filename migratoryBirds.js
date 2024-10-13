// - Function Description
// Complete the migratoryBirds function in the editor below.
// migratoryBirds has the following parameter(s):
// int arr[n]: the types of birds sighted

// - Returns
// int: the lowest type id of the most frequently sighted birds

// - Input Format
// The first line contains an integer, n, the size of arr.
// The second line describes arr as n space-separated integers, each a type number of the bird sighted.

/*
 * Complete the 'migratoryBirds' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/**
 * @param {number[]} arr
 * @returns {number} 回傳首個物件中值最大的鍵
 */
function migratoryBirds(arr) {
  const statistics = {};
  for (const id of arr) {
    if (!statistics[id]) {
      statistics[id] = 1;
    } else {
      statistics[id] += 1;
    }
  }

  const maxValue = Math.max(...Object.values(statistics));

  for (const i in statistics) {
    if (statistics[i] === maxValue) {
      return i;
    }
  }
}
