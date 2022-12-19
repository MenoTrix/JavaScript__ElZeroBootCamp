// let seconds = Date.now() / 1000;
// console.log(`${seconds} Seconds`);
// let minutes = seconds / 60;
// console.log(`${minutes} minutes`);
// let hours = minutes / 60;
// console.log(`${hours} hours`);
// let days = hours / 24;
// console.log(`${days} days`);
// let years = days / 365;
// console.log(`${years} years`);

// let dateNow = new Date();
// console.log(dateNow);
// let birthDate = new Date("March 7,95");
// console.log(birthDate);
// let timeDifference = dateNow - birthDate;

// console.log(timeDifference / 1000 / 60 / 60 / 24 / 365);

// let dateTest = new Date(1000);
// console.log(dateTest);

// dateTest.setMonth(2);
// console.log(dateTest);

// console.log(Date.parse("March 7 1995"));

// let date2 = new Date(794527200000);
// console.log(date2);

// Tasks /////////////////////////////////////////////
// Task1 ***********************************************
// let dateNow = Date.now();
// let birthDate = new Date("March 7 1995");
// let myMilliSeconds = dateNow - birthDate;
// let seconds = myMilliSeconds / 1000;
// console.log(`${parseInt(seconds)} Seconds`);
// let minutes = seconds / 60;
// console.log(`${parseInt(minutes)} Minutes`);
// let hours = minutes / 60;
// console.log(`${parseInt(hours)} Hours`);
// let days = hours / 24;
// console.log(`${parseInt(days)} Days`);
// let years = days / 365;
// console.log(`${parseInt(years)} years `);

// Task2 ***********************************************
// let date = new Date(0);
// date.setUTCHours(-2);
// date.setFullYear(1980);
// date.setSeconds(10);
// console.log(date);
// Task3 ***********************************************
// let date2 = new Date();
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(date2);
// date2.setDate(0);
// console.log(date2);
// console.log(
//   `Previous Month is ${
//     monthNames[date2.getMonth()]
//   } And Last Day is ${date2.getDate()}`
// );
// Task4 ***********************************************
// let birthDate1 = new Date("March 7 1995");
// console.log(birthDate1);
// let birthDate2 = new Date("March 7 95");
// console.log(birthDate2);
// let birthDate3 = new Date("1995-03-07");
// console.log(birthDate2);
// let birthDate4 = new Date("03/07/1995");
// console.log(birthDate4);
// Task5 ***********************************************
// let loopTimeBefore = performance.now();
// for (let i = 0; i < 10000; i++) {
//   document.write(`<div>Hello ${i}<div>`);
// }
// let loopTimeAfter = performance.now();
// console.log(
//   `It Took The Loop ${parseInt(loopTimeAfter - loopTimeBefore)} MilliSeconds`
// );
// Task6 ***********************************************
// Write Your Generator Function Here
// function* gen() {
//   index = 0;
//   while (true) {
//     yield index++;
//   }
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// Task7 ***********************************************
// function* genNumbers() {
//   let arr = [1, 2, 2, 2, 3, 4, 5];
//   let myArr = new Set(arr);
//   yield* myArr;
// }
// function* genLetters() {
//   let arr = ["A", "B", "B", "B", "C", "D"];
//   let myArr = new Set(arr);

//   yield* myArr;
// }

// function* genAll() {
//   yield* genNumbers();
//   yield* genLetters();
// }
// // Write Your Generator Function Here

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}
// Task8 ***********************************************
import calc from "./mod-1.js";
// import {a as No1 , b as No2 , c as No3 }  from "./mod-2.js"
import * as modOne from "./mod-2.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
// console.log(calc(No1,  No2 , No3)); // 60
