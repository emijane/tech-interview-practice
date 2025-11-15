const books = [
  { title: "The Hobbit", genre: "Fantasy" },
  { title: "Dune", genre: "Sci-Fi" },
  { title: "The Lord of the Rings", genre: "Fantasy" },
  { title: "Neuromancer", genre: "Sci-Fi" },
  { title: "Pride and Prejudice", genre: "Romance" },
  { title: "Emma", genre: "Romance" },
  { title: "Mistborn", genre: "Fantasy" }
];

function groupByCategory(books) {
    // create an empty object to store grouped results
    let grouped = {};

    for (let i = 0; i < books.length; i++) {
        // get the current books title
        let title = books[i].title;
        // get the current books genre
        let genre = books[i].genre;

        // if this genre does not exist yet in grouped
        if (!grouped[genre]) {
            // create a new empty array for this genre
            grouped[genre] = [];
        }

        // add this books title into the array for its genre
        grouped[genre].push(title);
    }

    return grouped;
}

console.log(groupByCategory(books));