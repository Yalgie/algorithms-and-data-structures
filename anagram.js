function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    for (let letter of str1) {
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
    }

    for (let letter of str2) {
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter]--;
        }
    }

    return true;
}

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("textreverse", "reversetext")); // true
