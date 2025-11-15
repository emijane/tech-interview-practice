// Write a function that checks if a given string reads the same forward and backward.

function isPalindrome(str) {

    // create a variablet to save the reversed string
    // split the string
    // reverse the string
    // join it back together
    const reversedStr = str.split('').reverse().join('');

    // does the original string equal the reversed string?
    return str === reversedStr; 
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("dog"));