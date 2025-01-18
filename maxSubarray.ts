/*
 * Complete the 'maxSubarray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function maxSubarray(arr: number[]) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const arrSum = arr.reduce((acc, cur) => acc + cur);
  const minIdx = arr.indexOf(min);
  // 2 -1 2 3 4 -5
  // 5
  // [10,0]
  // left: 10 right: 0  total: 5

  // 2 -1 2 3 -5 4
  // [6,4]
  // left: 6  right: 4   total: 5

  // 2 -5 2 3 -1 4
  // [2,8]
  // left: 2  right: 8   total: 5
  const asideSum = (arr) =>
    arr.reduce(
      (acc, cur, idx) => {
        if (idx < minIdx) acc[0] += cur;
        if (idx > minIdx) acc[1] += cur;
        return [acc[0], acc[1]];
      },
      [0, 0]
    );

  if (min >= 0 && max >= 0) {
    console.log('1', arrSum, arrSum);
    return [arrSum, arrSum];
  } else if (min < 0 && max < 0) {
    console.log('2', max, max);
    return [max, max];
  } else if (max >= 0 && min < 0) {
    const subArrays = asideSum(arr)[0] >= arrSum ? asideSum(arr)[0] : asideSum(arr)[1];
    const subSequences = arr.filter((e) => e > 0).reduce((acc, cur) => acc + cur);
    console.log('3', asideSum(arr), subArrays, subSequences);
    return [subArrays, subSequences];
  } else {
    console.log('4');
  }
}

// const asideSum = arr.reduce(
//   (acc, cur, idx) => {
//     if (idx < minIdx) acc[0] += cur;
//     if (idx > minIdx) acc[1] += cur;
//     return [acc[0], acc[1]];
//   },
//   [0, 0]
// );

// const minIdx = arr.indexOf(min)
// const arr
// - 都是正數 (>= 0) [max,min >= 0]
//      - return 1, 2 所有元素加總
// - 都是負數 (< 0) [max,min < 0]
//      - return 1, 2 最大值
// - 有正有負  [max > 0, min < 0]
//      - return 1
//          step1: 找到最小值所在的index
//          step2: 計算左右兩側的總和
//          step3: 若>=最小值，則 array 加總 ; 若小於則回傳左/右
//      - return 2 所有正數加總

// const minIdx = arr.indexOf(min)
// const arr

// - 都是正數 (>= 0) [max,min >= 0]
//      - return 1, 2 所有元素加總
// - 都是負數 (< 0) [max,min < 0]
//      - return 1, 2 最大值
// - 有正有負  [max > 0, min < 0]
//      - return 1
//          step1: 找到最小值所在的index
//          step2: 計算左右兩側的總和
//          step3: 若>=最小值，則 array 加總 ; 若小於則回傳左/右
//      - return 2 所有正數加總
