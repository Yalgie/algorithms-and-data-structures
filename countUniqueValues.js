function countUniqueValues(arr) {
  let i = 0;

  for (let j = i + 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 5, 5, 6, 6, 7, 8, 9]));
