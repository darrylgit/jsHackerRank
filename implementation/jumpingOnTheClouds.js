function jumpingOnClouds(c, k) {
  let energy = 100;
  let index = 0;

  // First jump
  energy--;
  index = (index + k) % c.length;

  // Subsequent jumps
  while (index !== 0) {
    if (c[index] == 1) {
      energy -= 2;
    }

    energy--;
    index = (index + k) % c.length;
  }

  // After last jump
  if (c[0] == 1) {
    energy -= 2;
  }

  return energy;
}

console.log(
  jumpingOnClouds([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1], 19)
);
