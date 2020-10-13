function findDigits(n) {
  const digits = [];
  let copyOfN = n;

  // Continually divide by 10 to extract digits
  while (copyOfN > 0) {
    digits.push(copyOfN % 10);
    copyOfN = Math.floor(copyOfN / 10);
  }

  // Reduce, comparing modulo of each val against n
  return digits.reduce((acc, val) => (val && n % val === 0 ? acc + 1 : acc), 0);
}

// 2
console.log(findDigits(12));

// 3
console.log(findDigits(1012));
