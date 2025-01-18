/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// const arr = [1, 2, 2, 3];
// del [1,3] , rest [2, 2];
// const arr = [3, 3, 2, 1, 3];
// del [2,1] , rest [3, 3, 3]

function equalizeArray(arr: number[]): number {
  const table = {};
  for (const e of arr) {
    table[e] = (table[e] || 0) + 1;
  }
  const getTableValues: number[] = Object.values(table);
  const max: number = Math.max(...getTableValues);
  return arr.length - max;
}

equalizeArray([1, 2, 2, 3]);
