// we have an array of names we want to autocomplete 
// we are looking two two things:
// one for names that START with the query
// one for names that INCLUDE the query, but dont start with it

// use startsWith();
// use includes();

const names = [
  "Sunseeker Predator",
  "Sailfish 360",
  "Sailmaster 22",
  "Yamaha Sport",
  "Sailstar Cruiser",
  "Ocean Runner"
];

// accept parameter for names array and the query
function searchBoats(names, query) {
    // create empty arrays for STARTS and CONTAINS
    let starts = [];
    let contains = [];

    // set query to lowercase so its case insensitive
    let q = query.toLowerCase();

    // index through the array
    for (let i = 0; i < names.length; i++) {
        // save the current name into the name variable as a lowercase string
        let name = names[i].toLowerCase();

        // if name starts with the query passed through the function parameter
        if (name.startsWith(q)) {
            // 1. push the current index of names into the starts array
            starts.push(names[i]);
        // if name INCLUDES the query word but doesnt start with it
        } else if (name.includes(q)) {
            // 2. push the current index of names into the contains array
            contains.push(names[i]);
        }
    }

    // combine the two into a single array
    // the same as return starts.concat(contains);
    return [...starts, ...contains];
}

console.log(searchBoats(names, "sail"));
