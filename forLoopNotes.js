

/* 1. Classic for loop (index-based, arrays)
    Use this when you need the index number.
    Best for:
    Accessing array[i]
    Counting
    Modifying items by index
    Beginner-friendly control
*/

for (let i = 0; i < array.length; i++) {
    const item = array[i];
    // do something with item
}


/* 2. for…of loop (iterate over values in an array)
    Best for:
    Clean + readable loops
    No index needed
    Looping through lists of objects (boats, users, etc.)
*/

for (const item of array) {
    // item is each element in the array
}


/* 

3. for…in loop (iterate over keys in an object)
    Best for:
    Looping through object properties
    Working with grouped data
    Transforming dictionary-like structures
*/

for (const key in object) {
    const value = object[key];
    // do something with key or value
}

/* NOTES:

| Loop Type | Use For                     | Iterates Over            | Example       |
| --------- | --------------------------- | ------------------------ | ------------- |
| `for`     | arrays when index is needed | index numbers (0,1,2...) | `array[i]`    |
| `for…of`  | arrays when value is needed | values                   | `item`        |
| `for…in`  | objects                     | keys                     | `object[key]` |


*/