// Write a function that counts how many vowels (a, e, i, o, u) appear in a given string.
// Your function should handle both uppercase and lowercase letters.

function countVowels(str) {
    // initiate count to 0
    let count = 0;
    // create a variable with both lowercase and uppercase versions of the vowels
    const vowels = "aeiouAEIOU";
    // loop through the length of the string passed in
    for ( let i = 0; i < str.length; i++ ) {
        // does the string include any vowels?
        if ( vowels.includes(str[i]) ) {
            // if it does, increase the count
            count++;
        }
    }
    // return count so we can console.log it
    return count;
}

// pass string in
console.log(countVowels('boat'));