function findDigits(n) {
  const digits = [];
  let copyOfN = n;

  // Continually divide by 10 to extract digits
  while (copyOfN > 0) {
    digits.push(copyOfN % 10);
    copyOfN = Math.floor(copyOfN / 10);
  }

  // return digits;

  // Reduce
  return digits.reduce((acc, val) => {
    return val && n % val === 0 ? acc + 1 : acc;
  }, 0);
}
// 2
console.log(findDigits(12));

// 3
console.log(findDigits(1012));
