// @ts-check
/*
 * Complete the 'permutationEquation' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */
/**
 * @param {number[]} p 原始資料
 * @returns {number[]}
 */
function permutationEquation(p) {
  const data = Array.from({length: p.length}, (_, index) => index + 1);
  const fix = (y) => p.findIndex((e) => e === y) + 1;
  const result = [];
  for (const d of data) {
    result.push(fix(fix(d)));
  }
  return result;
}
