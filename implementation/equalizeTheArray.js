function equalizeArray(arr) {
  const hash = new Map();

  arr.forEach(element => {
    if (hash.has(element)) {
      hash.set(element, hash.get(element) + 1);
    } else {
      hash.set(element, 1);
    }
  });

  const tallies = [...hash.values()];
  return arr.length - Math.max(...tallies);
}

// 2
console.log(equalizeArray([3, 3, 2, 1, 3]));
