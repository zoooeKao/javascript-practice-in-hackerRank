// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:
// The player with the highest score is ranked number 1 on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

// - Example
// ranked = [100, 90, 90, 80]
// player = [70, 80, 105]
// The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4, 3 and 1. Return [4, 3, 1].

/*
 * Complete the 'climbingLeaderboard' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

/**
 * @param {number[]} ranked 排行版
 * @param {number[]} player 選手分數
 * @returns 更新選手的排行
 */
function climbingLeaderboard(ranked, player) {
  const rankList = [...new Set(ranked)];
  const result = [];
  for (let score of player) {
    for (let rankIndex = 0; rankIndex < rankList.length; rankIndex++) {
      if (score >= rankList[rankIndex]) {
        result.push(rankIndex + 1);
        break;
      }
      if (score < rankList[rankList.length - 1]) {
        result.push(rankList.length + 1);
        break;
      }
    }
  }
  return result;
}
