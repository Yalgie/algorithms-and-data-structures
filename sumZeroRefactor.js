function sumZero(arr) {
    let leftI = 0;
    let rightI = arr.length - 1;

    while (leftI < rightI) {
        let sum = arr[leftI] + arr[rightI];

        if (sum === 0) {
            return [arr[leftI], arr[rightI]];
        }
        else if (sum > 0) {
            rightI--;
        }
        else if (sum < 0) {
            leftI++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 2, 5, 6])) // -2, 2
console.log(sumZero([-4, -3, -2, -1, 0, 5, 5, 6])) // undefined
