// @ts-check

/**
 * @param {number} d1 return day
 * @param {number} m1 return month
 * @param {number} y1 return year
 * @param {number} d2 due day
 * @param {number} m2 due month
 * @param {number} y2 due year
 * @return {number} fine
 */
function libraryFine(d1, m1, y1, d2, m2, y2) {
  const dayLateFine = 15;
  const monthLateFine = 500;
  const yearLateFine = 10000;

  if (y1 < y2 || (y1 === y2 && m1 < m2) || (y1 === y2 && m1 === m2 && d1 <= d2)) {
    return 0;
  }

  if (y2 < y1) {
    return yearLateFine;
  }

  if (m2 < m1) {
    return monthLateFine * (m1 - m2);
  }

  return dayLateFine * (d1 - d2);
}
