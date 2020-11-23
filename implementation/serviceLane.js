function serviceLane(width, cases) {
  return cases.map(testcase =>
    Math.min(...width.slice(testcase[0], testcase[1] + 1))
  );
}
