// Write a function that takes an array of numbers and returns the largest value.

function findLargest(arr) {

    // we've set n = the length of the array.
    let n = arr.length;
    // we assume that the largest number is the first index of the array
    let largest = arr[0];

    // loop through the array to parse each index
    for ( let i = 0; i < n; i++) {
        // if the current index in the array is greater than the number we assumed was the largest
        if (arr[i] > largest) {
            // update largest to the current index in the array
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([1,2,13,4]));