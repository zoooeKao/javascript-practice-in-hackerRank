/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s: string, n: number): number {
  const substringIncludeA = (substring: string) => Array.from(substring).filter((e) => e === 'a').length;

  const quo: number = Math.floor(n / s.length);
  const rem: number = n % s.length;

  const perSIncludeA = substringIncludeA(s);
  const remIncludeA = substringIncludeA(s.slice(0, rem));
  return quo * perSIncludeA + remIncludeA;
}
