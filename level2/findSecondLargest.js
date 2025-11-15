// Write a function that takes an array of numbers and returns the second largest value.
// If there’s not enough numbers, return undefined.

function findSecondLargest(arr) {
    // if theres not enough numbers, we return undefined
    if (arr.length < 2) return undefined;

    // we need these numbers to be smaller than any number we could possibly compare it to
    let largest = -Infinity;
    let secondLargest = -Infinity;

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // if the current point in the array is greater than largest
        if ( arr[i] > largest ) {
            // temporarily set secondLargest = largest
            secondLargest = largest;
            // and set largest equal to the current point in the array
            largest = arr[i];
        
        // if thats not true, and the current point in the array is greater than the secondLargest
        // and the current point in the array is not already set to largest
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            // set secondLargest = to the current point in the array
            secondLargest = arr[i];
        }
    }

    // if we never found a valid secondLargest, return undefined
    return secondLargest === -Infinity ? undefined : secondLargest;
}

console.log(findSecondLargest([0,1,2,3]));