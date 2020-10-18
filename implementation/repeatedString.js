function repeatedString(s, n) {
  let count = 0;

  // Find number of a's in s
  const numberOfAsInGivenString = s
    .split('')
    .reduce((acc, val) => (val === 'a' ? acc + 1 : acc), 0);

  // Figure out numbers of a's for string of length n, not worrying about remainder
  count += Math.floor(n / s.length) * numberOfAsInGivenString;

  // Calculate a's in remainder
  n %= s.length;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'a') {
      count++;
    }
  }

  return count;
}

console.log(repeatedString('a', 1000000000000));
