// Exercise no 5.1
// const maxValue = 5;
// const solution = Math.floor(Math.random() * maxValue) + 1;
// console.log("Solution:", solution);
// let isCorrect = false;
// while (!isCorrect) {
//   const userGuess = Number(prompt(`Enter a number between 1 and ${maxValue}:`));
//   if (userGuess === solution) {
//     isCorrect = true;
//     console.log("Congratulations! You guessed the correct number.");
//   } else {
//     if (userGuess > solution) {
//       console.log("Too high! Try again.");
//     } else {
//       console.log("Too low! Try again.");
//     }
//   }
// }

// Exercise no 5.2
// let count = 0;
// const step = 5;
// do {
//   console.log("Count:", count);
//   count += step;
// } while (count < 100);

// Exercise no 5.3
// const myWork = [];
// for (let i = 1; i <= 5; i++) {
//   const condition = i % 2 === 0 ? false : true;

//   const lesson = {
//     name: `Lesson ${i}`,
//     status: condition
//   };
//   myWork.push(lesson);
// }
// console.log(myWork);

// Exercise no 5.4
// const myTable = [];
// const numRows = 2; 
// const numColumns = 4; 
// let counter = 0;
// for (let row = 0; row < numRows; row++) {
//   const tempTable = [];
//   for (let col = 0; col < numColumns; col++) {
//     counter++;

//     tempTable.push(`Cell ${counter}`);
//   }
//   myTable.push(tempTable);
// }
// console.log(myTable);

// Exercise no 5.5
// const grid = [];
// const numCells = 64;
// let counter = 0;
// let row = [];
// for (let i = 0; i <= numCells; i++) {
//   if (counter % 8 === 0) {
//     if (row !== undefined) {
//       grid.push(row);
//     }
//     row = [];
//   }
//   counter++;
//   const tempValue = counter;
//   row.push(`Cell ${tempValue}`);
//   if (counter % 8 === 0) {
//     grid.push(row);
//   }
// }
// console.log(grid);

// Exercise no 5.6
// const myArray = [];
// for (let i = 0; i < 10; i++) {
//   myArray.push(i);
// }
// console.log("Array is:", myArray);
// console.log("Using for loop:");
// for (let j = 0; j < myArray.length; j++) {
//   console.log(myArray[j]);
// }
// console.log("Using for of loop:");
// for (const value of myArray) {
//   console.log(value);
// }

// Exercise no 5.7
// const myObject = {
//     item1: "Pizza",
//     item2: "Biryani",
//     item3: "Zinger Burger"
//   };
//   console.log("Object properties and values:");
//   for (const property in myObject) {
//     console.log(`${property}: ${myObject[property]}`);
//   }
//   const myArray = ["Pizza", "Biryani", "ZingerBurger"];
//   console.log("\nArray values:");
//   for (const value of myArray) {
//     console.log(value);
//   }

// Exercise np 5.8
// let output = "";
// const numberToSkip = 3;
// for (let i = 1; i <= 10; i++) {
 
//   if (i === numberToSkip) {
//     continue;
//   }
//   output += i + " ";
// }
// console.log("Output with continue:", output);
// output = "";  

// for (let i = 1; i <= 10; i++) {
//   if (i === numberToSkip) {
//     break;
//   }

//   output += i + " ";
// }
// console.log("Output with break:", output);

// Chapter project 1
let multiplicationTable = [];
let numberOfValues = 10;
for (let i = 1; i <= numberOfValues; i++) {
  let row = [];

  for (let j = 1; j <= numberOfValues; j++) {
    row.push(i * j);
  }
  multiplicationTable.push(row);
}
for (let i = 0; i < multiplicationTable.length; i++) {
  console.log(multiplicationTable[i].join('\t'));
}





