function squares(a, b) {
  // Rather than iterate through a bunch of numbers that might not be square integers,
  // we're going to start with the next square integer after a and take its root
  const startingSquareRoot = Math.ceil(Math.sqrt(a));

  let numberOfSquareIntegers = 0;

  // Keep squaring things until we reach b
  for (let i = startingSquareRoot; i * i <= b; i++) {
    numberOfSquareIntegers++;
  }

  return numberOfSquareIntegers;
}

// 2
console.log(squares(3, 9));

// 0
console.log(squares(17, 24));
