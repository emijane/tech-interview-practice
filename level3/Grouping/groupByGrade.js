const students = [
  { name: "Emma", grade: "A" },
  { name: "Liam", grade: "B" },
  { name: "Olivia", grade: "A" },
  { name: "Noah", grade: "C" },
  { name: "Sophia", grade: "B" },
  { name: "Ava", grade: "A" }
];

function groupByGrade(students) {
    let grouped = {};

    for ( let i = 0; i < students.length; i++) {
        let name = students[i].name;
        let grade = students[i].grade;

        if (!grouped[grade]) {
            grouped[grade] = [];
        }

        grouped[grade].push(name);
    }

    return grouped;
}

console.log(groupByGrade(students));