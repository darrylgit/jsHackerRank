function minimumDistances(a) {
  const distances = [];

  a.forEach((el, i, arr) => {
    const distance = arr.slice(i + 1).indexOf(el) + 1;

    if (distance > 0) {
      distances.push(distance);
    }
  });

  if (distances.length) {
    return Math.min(...distances);
  }

  return -1;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
