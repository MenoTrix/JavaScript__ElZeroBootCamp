// 1 ______________________________________
// function sayHello(theName, theGender) {
//     if(theGender=="Male"){
//         theGender=("Mr");
//      } else if (theGender==("Female")) {
//         theGender=("Miss");
//     }else{
//         theGender=""
//     }
//     return `Hello ${theGender} ${theName}`
// }
// let result=sayHello("Koky","Female")
// console.log(result);

// 2 ______________________________________
// function calculate(firstNum, secondNum, operation = "add") {
//   if (operation === "add") {
//     console.log(`${firstNum + secondNum}`);
//   } else if (operation === "subtract") {
//     console.log(`${firstNum - secondNum}`);
//   } else if (operation === "multiply") {
//     console.log(`${firstNum * secondNum}`);
//   }
//   if (firstNum == "number" && secondNum == "") {
//     console.log("Number is not found");
//   }
// }
// calculate(20, 3, "subtract");
// 3 ______________________________________

// function ageInTime(theAge) {
//   console.log(
//     `Your Age is ${theAge}, You Have lived for ${
//       theAge * 12
//     } \n Months ,  You Have lived for ${
//       theAge * 12 * 52
//     } \n Weeks,  You Have lived for ${
//       theAge * 365
//     } Days \n You Have lived for ${
//       theAge * 365 * 24
//     } \n Hours ,  You Have lived for ${
//       theAge * 365 * 24 * 60
//     } \n Minutes ,  You Have lived for ${theAge * 365 * 24 * 60 * 60} Seconds`
//   );
// }

// ageInTime(53);

// 4 ______________________________________
// function createSelectBox(startYear, endYear) {
//   document.write(`<select>`);
//   for (let index = 2000; index < 2022; index++) {
//     document.write(`<option value="${index}">${index}</option>`);
//     console.log(index);
//   }
//   document.write(`</select>`);
// }
// createSelectBox(2000, 2021);

// 5 ______________________________________

// function multip(...numbers) {
//   let output = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === "string") {
//       continue;
//     } else {
//       output *= parseInt(numbers[i]);
//     }
//     console.log(output);
//   }
// }
// multip(2, "a", 5.5);

function multiplyTask(...numbers) {
  let output = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    } else {
      output *= parseInt(numbers[i]);
      console.log(output);
    }
  }
}
multiplyTask(10, 20); // 200
multiplyTask("A", 10, 30); // 300
multiplyTask(100.5, 10, "B"); // 1000
