function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) console.log(i, j);
    }
  }
}

printAllPairs(5);
