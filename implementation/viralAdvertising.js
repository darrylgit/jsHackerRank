function viralAdvertising(n) {
  let totalLikes = 0;
  let recipients = 5;

  while (n) {
    const likesForDay = Math.floor(recipients / 2);
    totalLikes += likesForDay;
    recipients = likesForDay * 3;
    n--;
  }

  return totalLikes;
}
