// Write a function that returns the factorial of a given number n.
// 5 × 4 × 3 × 2 × 1 = 120 (5)
// A factorial is all of the numbers that count to that given number multiplied 
// IT IS NOT THE SAME AS THE FIBONACCI SEQUENCE!!!!!!!!!!!!!

function factorial(n) {
    // so we start at 1 obviously
    // cuz u dont wanna multiply by zero lul
    let answer = 1;

    // then we need to increment from 1 to n while 1 is less than or equal to n
    // we never want i to be greater than n, because that doesnt work.
    for ( let i = 1; i <= n; i++) {
        // so then we set our answer equal to answer * i for every loop.
        // we do this until i has reached the value of n.
        // 5 × 4 × 3 × 2 × 1 = 120 (5)
        // its really not that hard ur just being stupid
        answer *= i
    }

    return answer;
}

console.log(factorial(5));