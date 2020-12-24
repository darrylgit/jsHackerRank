function howManyGames(p, d, m, s) {
  let gameCount = 0;

  while (s >= p) {
    s -= p;
    gameCount += 1;

    if (s == m) {
      continue;
    }

    p -= d;
    if (p < m) {
      p = m;
    }
  }

  return gameCount;
}
