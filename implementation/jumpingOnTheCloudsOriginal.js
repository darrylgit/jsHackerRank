function jumpingOnClouds(c) {
  let jumps = 0;

  while (c.length > 1) {
    if (!c[2]) {
      c.splice(0, 2);
    } else {
      c.splice(0, 1);
    }

    jumps++;
  }

  return jumps;
}
