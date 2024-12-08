// @ts-check

// A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

// There is an array of clouds,  and an energy level . The character starts from  and uses  unit of energy to make a jump of size  to cloud . If it lands on a thundercloud, , its energy () decreases by  additional units. The game ends when the character lands back on cloud

// Complete the jumpingOnClouds function below.
/**
 * @param {number[]} c 雲的分佈
 * @param {number} k 每次跳幾朵雲
 */
function jumpingOnClouds(c, k) {
  let energy = 100;
  let position = 0; // 起跳的陣列位置
  const cloudNum = c.length; // 10

  do {
    position = (position + k) % cloudNum;
    if (c[position] === 1) energy -= 2;
    energy -= 1;
  } while (position !== 0);

  return energy;
}
