/*
 * Complete the 'countApplesAndOranges' function below.
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

/**
 * 計算分別有幾顆蘋果和橘子會砸到房子
 * @param {number} s 房屋起點 7
 * @param {number} t 房屋終點 11
 * @param {number} a 蘋果樹座落位置 5
 * @param {number} b 橘子樹座落位置 15
 * @param {number[]} apples 蘋果掉落的向量 [-2, 2, 1] -> [3, 7, 6]
 * @param {number[]} oranges 橘子掉落的向量 [5, -6] -> [20, 9]
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const getVol = (fruitAxis, fruitLocation) => {
    return fruitAxis.map((axis) => axis + fruitLocation).filter((location) => location >= s && location <= t).length;
  };

  console.log(getVol(apples, a));
  console.log(getVol(oranges, b));
}
