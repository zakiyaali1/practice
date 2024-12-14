// if else statment
// let age = 20;
// if (age >= 18) {
//   alert("Enter");
// } else {
//   alert("go back home");
// }

// const person = {
//   dob: 1997,
// };
// const age = 2024 - person.dob;
// let canEnter;

// if (age >= 18) {
//   canEnter = true;
// } else {
//   canEnter = false;
// }

// alert(canEnter);

// Assignment

// let age = prompt("Enter Age");

// if (!(age >= 0)) {
//   age = prompt("Enter a valid number");
// }

// const yob = new Date().getFullYear() - age;

// if (yob >= 1883 && yob <= 1900 && yob !== isNaN) {
//   alert("Lost yob");
// } else if (yob >= 1901 && yob <= 1927 && yob !== isNaN) {
//   alert("Greatest yob");
// } else if (yob >= 1928 && yob <= 1945 && yob !== isNaN) {
//   alert("Silent yob");
// } else if (yob >= 1946 && yob <= 1980 && yob !== isNaN) {
//   alert("Baby Boomers");
// } else if (yob >= 1965 && yob < +1996 && yob !== isNaN) {
//   alert("Millenials");
// } else if (yob >= 1997 && yob <= 2012 && yob !== isNaN) {
//   alert("yob Z");
// } else if (yob >= 2013 && yob <= 2024 && yob !== isNaN) {
//   alert("Alpha");
// } else {
//   ("none of the above");
// }

//assignment

for (
  let newAge = prompt("Enter your age");
  newAge < 0 || isNaN(newAge) || newAge.trim() === "";

) {
  newAge = prompt("Enter a valid number");
}
let kids = 1000;
let teens = 2000;
let adults = 3000;

if (newAge >= 0 && newAge <= 10) {
  alert(kids);
} else if (newAge >= 11 && newAge <= 17) {
  alert(teens);
} else if (newAge >= 18) {
  alert(adults);
}

// practise
// let user = prompt("How old are you?");

// const year = new Date().getFullYear() - user;
// console.log(year);

// if (user>=1883&&user<=1900){
//     alert ('Lost Generation')
// }else if (user>=1901 && user<=1927){
//     alert ('Greatest Generation')
// }else if (user>=1928&&user<=1945){
//     alert('')

// }

// global/local

// let newName = "zakiya";
// function name() {
// let newName = "zakiya";
// console.log(newName);
// }

// name();
// console.log(newName);

// //hoisting
// x = 66;
// let x;
// console.log(x);

// loops

// types of loops
// 1. for,while,do while,for.....or,for..in;
//for loop
// for - loops through a block of code a number of times
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (let i = 0; i < cars.length; i++) {}
// console.log(cars);

// const numbers3 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers3.length; i++) {
//   console.log(numbers3);
// }

// let numbers4 = 8;
// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }

//print all even numbers from 10 to 30 !!!!!!!!!!

// for (let i = 10; i <= 30; i++) {
//   if (i % 2 == 0) {
//     console.log(`${[i]} even`);
//   } else {
//     console.log(`${[i]} odd`);
//   }
// }
//for loops A-Z
// for (let i = 97; i < 122; i++) {
//   let letters = String.fromCharCode(i);
//   console.log(letters);
// }
//reverse 1-10
// steps
//  converting the number to a string, reversing the characters, and converting it back to a number,
// for (let i = 10; i >= 1; i--) {
// console.log(i);
// }
// sum of numbers;
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//sum of numbers 1-50
// let sumofnumbers = 0;
// for (let i = 1; i <= 50; i++) {
//   sumofnumbers += i;
// }
// console.log(sumofnumbers);
// //multiplication table
// for (let i = 1; i <= 100; i++) {
//   let multiplication = i * i;
//   console.log(multiplication);
// }

// for (let i = 10; i < 15; i++) {
//   const rem = 1 % 2;
//   if (rem !== 0) {
//     continue;
//   }
//   console.log(i);
// }
//check out on if-else statments also
//assignment implement an endless loop
// ternary operarors
//loops for while and do while loops!

// The while loop loops through a block of code as long as a specified condition is true.

// let i = 1;

// while (i < 10) {
//   console.log(i);
//   i++;
// }
