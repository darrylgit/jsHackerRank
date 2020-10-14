function extraLongFactorials(n) {
  function bigIntFactorial(num) {
    if (num == 1) {
      return 1;
    }

    return BigInt(num) * BigInt(bigIntFactorial(num - 1));
  }

  console.log(bigIntFactorial(n).toString());
}

console.log(extraLongFactorials(36));
