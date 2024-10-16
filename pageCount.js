// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:
// When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

// - Function Description
// Complete the pageCount function in the editor below.
// pageCount has the following parameter(s):
// int n: the number of pages in the book
// int p: the page number to turn to

// - Returns
// int: the minimum number of pages to turn

/*
 * Complete the 'pageCount' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

/**
 * @param {number} n 總頁數
 * @param {number} p 目標頁數
 * @returns 從首頁翻或從末頁翻到目標頁數最少翻頁次數
 */
function pageCount(n, p) {
  const totalFlips = Math.floor(n / 2);
  const flipsFromFront = Math.floor(p / 2);
  const flipsFromBack = totalFlips - flipsFromFront;
  return Math.min(flipsFromFront, flipsFromBack);
}
