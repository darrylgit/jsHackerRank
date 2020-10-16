function cutTheSticks(arr) {
  const answer = [];

  while (arr.length) {
    answer.push(arr.length);

    const shortestStick = Math.min(...arr);
    arr = arr
      .filter(stick => stick > shortestStick)
      .map(stick => stick - shortestStick);
  }

  return answer;
}
