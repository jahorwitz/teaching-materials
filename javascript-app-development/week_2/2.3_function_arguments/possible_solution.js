// Okay now for a challenge

// Let's say we have a group of students and we want to represent
// a single student with a JSON object such as the following:

// Work in groups of two or three (depending on class size) take 15-20 minutes to write a program that will output:
// * The longest name of any one student
// * The average age of all students
// * the average height of cool students
// * the average height of non-cool students

const students = [
    {
        "name": "Dan",
        "age": 27,
        "isCool": false,
        "heightInInches": 71
    },
    {
        "name": "Kelly",
        "age": 25,
        "isCool": true,
        "heightInInches": 69
    },
    {
        "name": "Eva",
        "age": 31,
        "isCool": false,
        "heightInInches": 61
    },
    {
        "name": "Sarah",
        "age": 33,
        "isCool": true,
        "heightInInches": 59
    },
    {
        "name": "Conrad",
        "age": 23,
        "isCool": true,
        "heightInInches": 65
    }
]

const getLongestName = function(students) {
    let longestName = "";
    for( let student of students) {
        if (student.name.length > longestName.length){
            longestName = student.name;
        }
    }
    return longestName;
}

// It's tempting to write separate functions to calculate the averages of age, height of cool students, 
// and height of non-cool students. But we can simplify our code if we recognize that the process of 
// calculating an average is used three times and we can take advantage of this by adding an additional 
// argument to the function, allowing us to re-use the same code for multiple parts of the question

const calculateAverage = function(students, attribute) {
    let total = 0;
    for( let student of students) {
        total += student[attribute];
    }
    return total / students.length;
}

// I took a shortcut and used the "filter" method for arrays, but if you didn't know about that
// you could use a function such as this one that filters by either cool or not cool:
const getStudentsByCoolness = function(students, filterMode) {
    const filteredStudents = [];
    for (let student of students) {
        if (student.isCool === filterMode) {
            filteredStudents.push(student);
        }
    }
    return filteredStudents;
}

const response = {
    longestName: getLongestName(students),
    averageAge: calculateAverage(students, "age"),
    averageCoolHeight: calculateAverage(students.filter((student) => student.isCool), "heightInInches"),
    averageNonCoolHeight: calculateAverage(students.filter((student) => !student.isCool), "heightInInches")
    //averageCoolHeight: calculateAverage(getStudentsByCoolness(students, true), "heightInInches"),
    //averageNonCoolHeight: calculateAverage(getStudentsByCoolness(students, false), "heightInInches")
}

console.log(`Response: ${JSON.stringify(response)}`);