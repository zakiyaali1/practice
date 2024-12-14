// let kids = 1000;
// let teens = 2000;
// let adults = 3000;

// let age = prompt("Enter your age");

// console.log("zakiya");

// for (; age < 0 || age === isNaN || age.trim() === ""; ) {
//   age = prompt("Enter a valid number");
// }

// if (age >= 0 && age <= 11) {
//   alert(kids);
// } else if (age >= 12 && age <= 17) {
//   alert(teens);
// } else if (age >= 18) {
//   alert(adults);
// }
//while
// while (age < 0 || age === isNaN || age.trim() === "") {
//   if (age >= 0 && age <= 11) {
//     console.log(kids);
//   } else if (age >= 12 && age <= 17) {
//     console.log(teens);
//   } else if (age >= 18) {
//     console.log(adults);
//   }
// }
//do while loop

// do {
//   if (age >= 0 && age <= 11) {
//     alert(kids);
//   } else if (age >= 12 && age <= 17) {
//     alert(teens);
//   }
// } while (age < 0 || age === isNaN || age.trim() === "");
let balance = 0;
let deposit;
let withdraw;
let cancel;

let userInput = prompt(
  "What would you want to do?\n1. Deposit\n2.withdraw\n3.cancel"
);

do {
  if (userInput == 1) {
    deposit = parseInt(prompt("How much would you like to deposit"));
    balance = balance + deposit;
    alert(`your total balance is ${balance}`);
    userInput = prompt(
      "What would you want to do?\n1. Deposit\n2.withdraw\n3.cancel"
    );
  } else if (userInput == 2) {
    withdraw = parseInt(prompt("How much would you like to widthdraw"));
    balance = balance - withdraw;
    alert(`your total balance is ${balance}`);
    userInput = prompt(
      "What would you want to do?\n1. Deposit\n2.withdraw\n3.cancel"
    );
  } else if (userInput == 3) {
    alert("cancel transaction");
  }
} while (userInput == 1 || userInput == 2);
