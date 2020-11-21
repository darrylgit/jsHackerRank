function acmTeam(topic) {
  // I really wanted to use a bitwise operator here, even though it's not that easy in Javascript
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
