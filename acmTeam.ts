/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function knowSubject(memberOneSubject: string, memberTwoSubject: string): number {
  const subjects: number = memberOneSubject.length;
  let result: number = 0;
  for (let i = 0; i < subjects; i++) {
    if (memberOneSubject[i] === '1' || memberTwoSubject[i] === '1') {
      result += 1;
    }
  }
  return result;
}

function acmTeam(topic: string[]): number[] {
  const teams: number = topic.length;
  const combination: Map<string, number> = new Map();

  for (let i = 1; i <= teams; i++) {
    for (let j = i + 1; j <= teams; j++) {
      combination.set(String(i) + String(j), 0);
    }
  }

  for (const team of combination) {
    const [key, value] = team;
    combination.set(key, knowSubject(topic[Number(key[0]) - 1], topic[Number(key[1]) - 1]));
  }

  const maxTopics = Math.max(...combination.values());
  const numOfTeams = [...combination.values()].filter((val) => val === maxTopics).length;

  return [maxTopics, numOfTeams];
}
