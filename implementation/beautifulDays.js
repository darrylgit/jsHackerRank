// Complete the beautifulDays function below.

// APPROACH 1: FUNCTIONAL / EXPERIMENTAL
function beautifulDays1(i, j, k) {
  let beautifulDayCount = 0;

  inclusiveRange(i, j).forEach(day => {
    (Math.abs(day - reversedDay(day)) / k) % 1 === 0 && beautifulDayCount++;
  });

  return beautifulDayCount;
}

function inclusiveRange(i, j) {
  return new Array(j - i + 1).fill(0).map((_, idx) => idx + i);
}

// Look ma, no string conversion! (probably should have used string conversion though)
function reversedDay(day) {
  let digits = [];

  // Add individual digits to array
  while (day >= 1) {
    digits.unshift(day % 10);

    day = Math.floor(day / 10);
  }

  // Perform fancy multiplication to get the reversed number
  return digits.reduce((acc, val, i) => acc + val * 10 ** i, 0);
}

// APPROACH 2: ITERATIVE / SANE
function beautifulDays(i, j, k) {
  let beautifulDayCount = 0;

  while (i <= j) {
    const reversedDay = Number(i.toString().split('').reverse().join(''));

    (Math.abs(i - reversedDay) / k) % 1 === 0 && beautifulDayCount++;

    i++;
  }

  return beautifulDayCount;
}
