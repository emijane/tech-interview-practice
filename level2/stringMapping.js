const students = [
  { name: "Emma", grade: "A", age: 20 },
  { name: "Liam", grade: "B", age: 22 },
  { name: "Olivia", grade: "A", age: 19 },
  { name: "Noah", grade: "C", age: 21 }
];

function stringMapping(students) {
    let mapped = [];

    for (let i = 0; i < students.length; i++) {
        let name = students[i].name;
        let grade = students[i].grade;
        let age = students[i].age;

        let sentence = `${name} is ${age} years old and has a grade of ${grade}`;

        mapped.push(sentence);
    }

    return mapped;
}

console.log(stringMapping(students));