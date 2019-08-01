function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 2, 5, 6])) // -2, 2
console.log(sumZero([-4, -3, -2, -1, 0, 5, 5, 6])) // undefined
