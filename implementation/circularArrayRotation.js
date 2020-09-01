function circularArrayRotation(a, k, queries) {
  while (k) {
    a.unshift(a.pop());
    k--;
  }

  return queries.map(query => a[query]);
}
