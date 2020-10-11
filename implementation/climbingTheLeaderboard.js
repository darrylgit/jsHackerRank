function climbingLeaderboard(scores, alice) {
  let ranks = [];

  // Get distinct scores
  let scoresSet = [...new Set(scores)];

  while (alice.length) {
    // Get first element of in alice array
    let aliceScore = alice.shift();

    let i;

    // Start searching from most recent rank
    if (ranks.length) {
      i = ranks[ranks.length - 1] - 2;
    } else {
      i = scoresSet.length - 1;
    }

    // Decrement until aliceScore is less than score in scoreSet
    while (scoresSet[i] <= aliceScore) {
      i--;
    }

    // Insert aliceScore into scoreSet
    scoresSet.splice(i + 1, aliceScore);

    // Add new rank
    ranks.push(i + 2);
  }

  return ranks;
}

// RECURSIVE SOLUTION (breaks on large test cases, presumably exceeds stack size)
// function climbingLeaderboard(scores, alice) {
//   if (alice.length === 0) {
//     return []
//   }

//   const aliceScore = alice.shift();

//   let i = scores.length -1;
//   while (scores[i] < aliceScore) {
//     i --;
//   }

//   scores = [...scores.slice(0, i + 1), aliceScore]

//   const rank = scores.reduce((acc, val, idx, src) => {
//     if (idx === 0) {
//       return acc
//     }

//     return val < src[idx - 1] ? acc + 1 : acc
//   }, 1)

//   return [rank, ...climbingLeaderboard(scores, alice)]
// }

console.log(
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
