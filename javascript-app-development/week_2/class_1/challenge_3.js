// Sample Data - For these exercises, you should not edit this object

const students = [{
    name: "Kyle",
    gpa: 4.0,
    age: 19,
    majors: ["Computer Science", "Economics"],
    currentClasses: [{
        courseName: "Programming",
        meetingDays: ["Monday", "Wednesday", "Friday"]
      },
      {
        courseName: "Economics",
        meetingDays: ["Tuesday", "Thursday"]
      }
    ]
  },
  {
    name: "Eric",
    gpa: 1.2,
    age: 20,
    majors: ["Chemistry", "Biology"],
    currentClasses: [{
        courseName: "Chemistry",
        meetingDays: ["Monday", "Wednesday", "Friday"]
      },
      {
        courseName: "Anatomy",
        meetingDays: ["Monday", "Wednesday"]
      }
    ]
  },
  {
    name: "Stan",
    gpa: 3.1,
    age: 21,
    majors: ["English", "Political Science"],
    currentClasses: [{
        courseName: "Writing",
        meetingDays: ["Tuesday", "Thursday"]
      },
      {
        courseName: "Public Speaking",
        meetingDays: ["Monday", "Wednesday"]
      }
    ]
  },
  {
    name: "Kenny",
    gpa: 2.3,
    age: 18,
    majors: ["Math", "Art History"],
    currentClasses: [{
        courseName: "Calculus",
        meetingDays: ["Monday", "Tuesday", "Wednesday"]
      },
      {
        courseName: "Painting",
        meetingDays: ["Monday", "Wednesday"]
      }
    ]
  }
];

// Everyone gets one part to write the code for. Write the code for your solution beneath the Part description.
// When you're done, commit your changes
// and push. Make a pull request (PR) from your fork into the base. Once all changes are
// in the base, pull the changes down and run the code.

// Part 1
// The school has to close Friday for a snow day.
// Write a function called determineEffectedStudents.
// The function should take an array of students and a day
// and return a new array of the students impacted by the closure

// Part 2
// The school needs to notify any students with a GPA below 2.0 that they
// are failing. Write a function called getFailingStudents.
// The function should take an array of students
// and return a new array of students with failing GPAs

// Part 3
// The school would like to determine whether a student is taking a course
// with the same name as one of their majors. Write a function called isTakingMajorCourse.
// The function should take in an object representing a student
// and return the name of the class/major if so, otherwise return null

// Part 4
// The school would like to unenroll a student from a class.
// Write a void function called unEnrollStudentFromClass.
// The function should take in a student object and a class name as a string

// Part 5

    // Read Parts 1 through 4. Write a series of commands and console logs to
    // test the above functions and prove that they are working as intended.
