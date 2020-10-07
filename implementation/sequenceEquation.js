function permutationEquation(p) {
  return p.map((el, i, arr) => {
    const indexOfIndex = arr.indexOf(i + 1) + 1;
    return arr.indexOf(indexOfIndex) + 1;
  });
}

console.log(permutationEquation([5, 2, 1, 3, 4]));
