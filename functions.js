function greetStudent(students) {
  console.log("good afternoon " + students);
}
console.log("Abass");
greetStudent("zakiya");

//arrow functions
const addNumbers = () => {};

// Check if its a leap year or not

let userinput = prompt("Enter Year");

let checkYear = function (currentYear) {
  if (currentYear % 4 == 0) {
    return console.log("leap y ear");
  } else if (currentYear % 4 != 0) {
    return console.log("Not a leap year");
  }
};
checkYear(userinput);

//divisible by two

let user = prompt("Enter a number");
let number = function (divisible) {
  if (divisible % 2 == 0) {
    return console.log("even number");
  } else if (divisible % 2 != 0) {
    return console.log("odd");
  }
};
number(user);
