console.log("Farhan Akhtar");

x = BigInt("7488870710");

y = Symbol("Hello");

// student is an object here
const student = {
    fullName : "Farhan",
    age : 21,
    cgpa : 9.5,
    isPass : true
    // key : value
};

console.log(student);

console.log(student["age"]);
student.age = student["age"] + 1;
student["age"] = student.age + 1;
console.log("Aftter two years")
console.log(student.age);

student["fullName"];
console.log(student["fullName"]);
console.log(student.fullName);

console.log("Type of student..")
console.log(typeof student)