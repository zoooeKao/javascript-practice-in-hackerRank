// - Example
// h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
// word = 'torn'
// The heights are 𝑡 = 2, o = 1, r = 1 and n = 1. The tallest letter is 2 high and there are 4 letters. The highlighted area will be 2 × 4 = 8 , so the answer is 8.

/*
 * Complete the 'designerPdfViewer' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

/**
 * @param {number[]} h 24個字母所需的空間
 * @param {string} word 欲瀏覽的文字
 * @return {number} 欲瀏覽文字所需的空間
 */
function designerPdfViewer(h, word) {
  const alphabetHeight = {};
  let maxHeightAlphabet = 0;
  const alphabetTable = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < 26; i++) {
    alphabetHeight[alphabetTable[i]] = h[i];
  }
  for (const alphabet of word) {
    if (alphabetHeight[alphabet] > maxHeightAlphabet) {
      maxHeightAlphabet = alphabetHeight[alphabet];
    }
  }
  console.log(alphabetHeight);
  return maxHeightAlphabet * word.length;
}
