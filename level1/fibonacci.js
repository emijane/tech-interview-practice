// take in a number and return the fibonacci sequence for it
// F(0) = 0
// F(1) = 1
// we know that

// F(n) = F(n-1) + F(n-2)
// [0 , 1]
// 0 + 1 = [1]
// 1 + 1 = [2]
// 2 + 1 = [3]
// 3 + 2 = [5]
// [ 0, 1, 1, 2, 3 ]

function fib(n) {
    // we know this is the defined starting point by fib sequence
    let arr = [0,1];

    // So we start the loop at 2 to calculate all the remaining values:
    for (let i = 2; i < n; i++) {
        // use fib formula
        arr[i] = arr[i - 1 ]+ arr[ i - 2];
    }

    return arr;

}

console.log(fib(5));