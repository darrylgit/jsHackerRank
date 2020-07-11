function utopianTree(n) {
  if (n === 0) {
    return 1;
  }

  return n % 2 ? 2 * utopianTree(n - 1) : 1 + utopianTree(n - 1);
}
