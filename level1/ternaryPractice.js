// Write a function that takes two numbers and returns the larger of the two.
// jhsdfhjsdhjkfjksdhfhjksdfhjkfsdhjksdf

function maxOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwo(2,3));

// Ternary operator
// “If this condition is true, do the first thing; otherwise, do the second thing.”
function maxOfToo(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// If num1 is greater than num2
// return num1
// if its not, return num2