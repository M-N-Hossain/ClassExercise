const student = {
  name: "Nayeem",
  id: "12345",
  grades: [],
};

function addGrade(student, grade) {
  if (student && typeof student === "object" && Array.isArray(student.grades)) {
    student.grades.push(grade);
  } else if (student && typeof student === "object") {
    student.grades = [grade];
  } else {
    console.log("provided input is not a object");
  }
}
function updateStudentName(student, newName) {
  if (student && typeof student === "object") {
    student.name = newName;
  } else {
    console.log("provided input is not a object");
  }
}

addGrade(student, 45);
addGrade(student, 39);
addGrade(student, 45);
updateStudentName(student, "Jahid");

console.log(student);
