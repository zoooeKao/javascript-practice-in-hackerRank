/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

/**
 * @param {string} s
 * @returns {string}
 */
function timeConversion(s) {
  const prev2 = Number(s.slice(0, 2));
  if (s.slice(-2) === 'AM') {
    return prev2 === 12 ? '00' + s.slice(2, 8) : s.slice(0, 8);
  } else {
    // return String((Number('07:05:45PM'.slice(0, 2)) < 12)+ 12) + s.slice(2, 8);
    return prev2 < 12 ? String(prev2 + 12) + s.slice(2, 8) : s.slice(0, 8);
  }
}
timeConversion('07:05:45AM'); //=> "07:05:45"
timeConversion('07:05:45PM'); //=> "19:05:45"
timeConversion('12:01:00AM'); //=> "00:01:00"
timeConversion('12:01:00PM'); //=> "12:01:00"
