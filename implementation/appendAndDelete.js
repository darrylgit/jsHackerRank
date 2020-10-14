function appendAndDelete(s, t, k) {
  // If we can delete s completely and rebuild t from scratch within k operations, return early
  if (s.length + t.length <= k) {
    return 'Yes';
  }

  let firstDifferentIndex = 0;

  // Find first index that differs between s and t
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      break;
    }

    firstDifferentIndex++;
  }

  // Assign operations count to number of indices to remove from s, and also by the number of indices we'd add from t
  const operations =
    s.length - firstDifferentIndex + (t.length - firstDifferentIndex);
  // We could simplify this to s.length + t.length - 2 * firstDifferentIndex, but for the sake of legibility...

  // If k is too small, return "No"
  if (operations > k) {
    return 'No';
  }

  // If we have leftover operations, we can only ever arrive at t in an even number of additional operations. Therefore:
  return (k - operations) % 2 === 0 ? 'Yes' : 'No';
}
