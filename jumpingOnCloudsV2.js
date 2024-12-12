// @ts-check

/**
 * @param {number[]} c 雲的所在位置
 * @returns 跳躍的次數
 */
function jumpingOnClouds(c) {
  const JUMP = 2;
  const path = [];
  let curIdx = 0;
  const thunderclouds = c.reduce((/** @type {number[]} */ res, cur, inx) => {
    if (cur === 1) res.push(inx);
    return res;
  }, []);

  while (curIdx + JUMP <= c.length) {
    thunderclouds.includes(curIdx + JUMP) ? (curIdx += 1) : (curIdx += JUMP);
    path.push(curIdx);
  }

  return path.length;
}
