function angryProfessor(k, a) {
  const onTimeStudents = a.reduce(
    (acc, student) => (student <= 0 ? acc + 1 : acc),
    0
  );

  return onTimeStudents >= k ? 'NO' : 'YES';
}
