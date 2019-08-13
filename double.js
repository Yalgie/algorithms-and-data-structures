function double(n) {
  let newArr = [];

  for (let i = 0; i < n.length; i++) {
    newArr.push(2 * n[i]);
  }

  return newArr;
}

console.log(double([2, 4, 6]));
