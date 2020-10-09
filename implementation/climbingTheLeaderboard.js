function climbingLeaderboard(scores, alice) {
  let ranks = []
  while (alice.length) {
    let aliceScore = alice.shift();
  
    let i = scores.length -1;
    while (scores[i] < aliceScore) {
      i --;
    }
  
    // console.log("Scores before: ",scores)
    scores = [...scores.slice(0, i + 1), aliceScore]
    // console.log("Scores after: ", scores)
  
    const rank = scores.reduce((acc, val, idx, src) => {
      if (idx === 0) {
        return acc
      }
  
      return val < src[idx - 1] ? acc + 1 : acc
    }, 1)

    ranks.push(rank)
  }

  
  return ranks
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

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));


