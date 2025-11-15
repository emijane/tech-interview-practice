
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// parse through the array
// check for duplicates
// only add originals to new array


function dedupe(numbers) {
    let deduped = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if ( !deduped.includes(number) ) {
            deduped.push(number);
        }
    }

    return deduped;
}

console.log(dedupe(numbers));