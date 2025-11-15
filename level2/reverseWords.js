// Write a function that takes in two strings and checks if they’re anagrams of each other.
// Two words are anagrams if they contain the same letters in a different order.

function isAnagram(word1, word2) {

    // set both words to lowercase and removed any spaces globally
    word1 = word1.toLowerCase().replace(/\s/g, '');
    word2 = word2.toLowerCase().replace(/\s/g, '');

    // sort the words alphabetically
    let sorted1 = word1.split('').sort().join('');
    let sorted2 = word2.split('').sort().join('');

    // compare that the two words contain the same letters in a different order
    return sorted1 === sorted2;
}

console.log(isAnagram('listen', 'silent'));