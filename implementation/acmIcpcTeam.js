function acmTeam(topic) {
  let maxKnownTopics = 0;
  let numberOfMaxKnownTopicTeams = 1;

  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let knownTopicCount = 0;

      topic[i].split('').forEach((val, idx) => {
        if (val === '1' || topic[j][idx] === '1') {
          knownTopicCount++;
        }
      });

      if (knownTopicCount > maxKnownTopics) {
        maxKnownTopics = knownTopicCount;
        numberOfMaxKnownTopicTeams = 1;
      } else if (knownTopicCount === maxKnownTopics) {
        numberOfMaxKnownTopicTeams++;
      }
    }
  }

  return [maxKnownTopics, numberOfMaxKnownTopicTeams];
}

console.log(acmTeam(['10101', '11100', '11010', '00101']));

// I really wanted to use a bitwise operator  even though it breaks in HackerRank's longer test cases
function acmTeamBitwise(topic) {
  function bitwiseOrTopicsCount(bin1, bin2) {
    const base10BitwiseResult = parseInt(bin1, 2) | parseInt(bin2, 2);

    const binaryBitwiseResultString = (base10BitwiseResult >>> 0).toString(2);

    return binaryBitwiseResultString
      .split('')
      .map(val => Number(val))
      .reduce((acc, val) => acc + val, 0);
  }

  // Generate pairs
  const twoPersonTeams = [];

  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i; j < topic.length - 1; j++) {
      twoPersonTeams.push([topic[i], topic[j + 1]]);
    }
  }

  const knownTopics = twoPersonTeams.map(team => bitwiseOrTopicsCount(...team));

  const maxTopics = Math.max(...knownTopics);

  const numberOfMaxTopicTeams = knownTopics.reduce(
    (acc, val) => (val === maxTopics ? acc + 1 : acc),
    0
  );

  return [maxTopics, numberOfMaxTopicTeams];
}
