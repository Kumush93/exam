function isAnagram(str1, str2) {

    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '');


    if (str1.length !== str2.length) {
        return false;
    }


    const charCount1 = {};
    const charCount2 = {};


    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }


    for (let key in charCount1) {
        if (charCount1[key] !== charCount2[key]) {
            return false;
        }
    }


    return true;
}


console.log(isAnagram("tuk", "kut"));
console.log(isAnagram("olma", "mola"));
console.log(isAnagram("Hello", "world"));
console.log(isAnagram("Dormitory", "Dirty room")); 
