// Exercise no 6.1

// function add(num1, num2) {
//   return num1 + num2;
// }
// const a = 5;
// const b = 7;

// const result1 = add(a, b);
// console.log(`The sum of ${a} and ${b} is: ${result1}`);

// const x = 17;
// const y = 3;

// const result2 = add(x, y);
// console.log(`The sum of ${x} and ${y} is: ${result2}`);

// Exercise no 6.2

// const arr = ["beautiful", "creative", "intelligent", "friendly", "adventurous"];

// function sayHello() {
//   const userName = prompt("What's your name: ");

//   if (userName) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     const randomWord = arr[randomIndex];
//     console.log(`${userName} is ${randomWord}!`);
//   } else {
//     console.log("Invalid input. Please enter a name.");
//   }
// }
// sayHello();

//  Exercise no 6.3

// const num1 = 9;
// const num2 = 7;
// let operator = "+";

// function operation(value1, value2, op) {
//   if (op === "+") {
//     return value1 + value2;
//   } else if (op === "-") {
//     return value1 - value2;
//   }

//   if (op !== "+" && op !== "-") {
//     console.log("Invalid operator. Defaulting to addition.");
//     op = "+";
//   }
// }

// let result = operation(num1, num2, operator);
// console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);

// operator = "-";

// result = operation(num1, num2, operator);
// console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);

// // Exercise 6.4

// const array = [];

// for (let i = 0; i < 10; i++) {
//   const value1 = i * 5;
//   const value2 = i * i;

//   function sum(n1, n2) {
//     return n1 + n2;
//   }

// const functionResult = sum(value1, value2);

//   array.push(functionResult);
// }
// console.log(array);

// const expectedValues = [0, 6, 14, 24, 36, 50, 66, 84, 104, 126];
// console.log("Expected values:", expectedValues);

// Exercise no 6.5
// let value = "1000";
// (function () {
//   let value = "IIFE Function Value";
//   console.log("Inside IIFE Function:", value);
// })();

// const reslt = (function () {
//   let value = "IIFE Expression Value";
//   return value;
// })();

// console.log("Result from IIFE Expression:", reslt);
// console.log("Outside IIFE Functions:", value);

// Exercise no 6.6
// function Factorial(value) {
//   if (value === 0) {
//     return 1;
//   } else {
//     const result = value * Factorial(value - 1);
//     console.log(`Calculating factorial for ${value}: ${result}`);
//     return result;
//   }
// }

// const argument = 3;
// const factorialResult = Factorial(argument);
// console.log(`Factorial of ${argument} is: ${factorialResult}`);

// const changedArgument = 5; 
// const changedResult = Factorial(changedArgument);
// console.log(`Factorial of ${changedArgument} is: ${changedResult}`);

// Exercise no 6.7
// let startValue = 5;

// function countdownLoop(Value) {
//   console.log(`Countdown: ${Value}`);
//   if (Value < 1) {
//     return;
//   }
//   countdownLoop(Value - 1);
// }
// countdownLoop(startValue);

// let newStartValue = 2;
// countdownLoop(newStartValue);

// Exercise no 6.8
// const printToConsole = function(arg) {
//   console.log(arg);
// };
// printToConsole('Hello from function expression!');
// function printToConsoleDeclaration(arg) {
//   console.log(arg);
// }
// printToConsoleDeclaration('Hello from function declaration!');


// Chapter Project no 1 Recursive Function
// function countUpTo10(Value) {
//   console.log(Value);
//   if (Value >= 10) {
//     return;
//   }
//   countUpTo10(Value + 1);
// }
// console.log('Counting up to 10 starting from 1:');
// countUpTo10(1);
// console.log('\nCounting up to 10 starting from 7:');
// countUpTo10(7);

// Chapter Project no 2 Set time out 
const outputOne = () => console.log('One');
const outputTwo = () => console.log('Two');
const outputThree = () => console.log('Three');
const outputFour = () => console.log('Four');

const outputWithTimeout = () => {
  setTimeout(outputOne, 1000);
};
outputWithTimeout();
outputFour();
outputThree();
outputOne();
outputTwo();