// function showDetails(a, b, c) {
//   if (
//     typeof a === "string" &&
//     typeof b === "number" &&
//     typeof c === "boolean"
//   ) {
//     if (c === true) {
//       console.log(
//         `Hello ${a} , You Are ${b} Years old , You Are Avaliable for hire`
//       );
//     } else {
//       console.log(
//         `Hello ${a} , You Are ${b} Years old , You Are not Avaliable for hire`
//       );
//     }
//   }

//   if (
//     typeof a === "string" &&
//     typeof c === "number" &&
//     typeof b === "boolean"
//   ) {
//     if (b === true) {
//       console.log(
//         `Hello ${a} , You Are ${c} Years old , You Are Avaliable for hire`
//       );
//     } else {
//       console.log(
//         `Hello ${a} , You Are ${c} Years old , You Are not Avaliable for hire`
//       );
//     }
//   }

//   if (
//     typeof b === "string" &&
//     typeof a === "number" &&
//     typeof c === "boolean"
//   ) {
//     if (c === true) {
//       console.log(
//         `Hello ${b} , You Are ${a} Years old , You Are Avaliable for hire`
//       );
//     } else {
//       console.log(
//         `Hello ${b} , You Are ${a} Years old , You Are not Avaliable for hire`
//       );
//     }
//   }
//   if (
//     typeof b === "string" &&
//     typeof c === "number" &&
//     typeof a === "boolean"
//   ) {
//     if (a === true) {
//       console.log(
//         `Hello ${b} , You Are ${c} Years old , You Are Avaliable for hire`
//       );
//     } else {
//       console.log(
//         `Hello ${b} , You Are ${c} Years old , You Are not Avaliable for hire`
//       );
//     }
//   }
//   if (
//     typeof c === "string" &&
//     typeof b === "number" &&
//     typeof a === "boolean"
//   ) {
//     if (a === true) {
//       console.log(
//         `Hello ${c} , You Are ${b} Years old , You Are Avaliable for hire`
//       );
//     } else {
//       console.log(
//         `Hello ${c} , You Are ${b} Years old , You Are not Avaliable for hire`
//       );
//     }
//   }
//   if (
//     typeof c === "string" &&
//     typeof a === "number" &&
//     typeof b === "boolean"
//   ) {
//     if (b === true) {
//       console.log(
//         `Hello ${c} , You Are ${a} Years old , You Are Avaliable for hire`
//       );
//     } else {
//       console.log(
//         `Hello ${c} , You Are ${a} Years old , You Are not Avaliable for hire`
//       );
//     }
//   }
// }

// // showDetail("MenoTrix1", 20, true);
// // showDetail("MenoTrix2", false, 30);
// // showDetail(50, "MenoTrix3", true);
// // showDetail(true, "MenoTrix4", 49);
// // showDetail("MenoTrix5", 48, false);
// // showDetail("MenoTrix5", true, 47);
// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function showDetailTwo(a, b, c) {
//   let name;
//   let age;
//   let status;
//   if (typeof a === "string") {
//     name = a;
//   } else if (typeof a === "number") {
//     age = a;
//   } else {
//     status = a;
//   }
//   if (typeof b === "string") {
//     name = b;
//   } else if (typeof b === "number") {
//     age = b;
//   } else {
//     status = b;
//   }
//   if (typeof c === "string") {
//     name = c;
//   } else if (typeof c === "number") {
//     age = c;
//   } else {
//     status = c;
//   }
//   if (status == true) {
//     status = "You Are Avaliable for hire";
//   } else {
//     status = "You Are Not Avaliable for hire";
//   }
//   return `Hello ${name} , You Are ${age} Years old , ${status}`;
// }

// console.log(showDetailTwo(20, false, "meno"));

function showDetail3(a, b, c) {
  let name;
  let age;
  let status;

  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : (status = a);
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : (status = b);
  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
    ? (age = c)
    : (status = c);
  status == true
    ? (status = "You Are Available for hire")
    : (status = "You Are Not Available for hire");

  return `Hello ${name} You Are ${age} Years old , ${status}`;
}
console.log(showDetail3(20, false, "meno"));
console.log(showDetail3("meno", false, 20));
console.log(showDetail3(20, "meno2", true));
// console.log(showDetail3(20, false, "meno"));
// Solution from internet
function checkStatus(a, b, c) {
  let inform = [a, b, c];
  for (i = 0; i < inform.length; ++i) {
    if (typeof inform[i] === "string") {
      x1 = inform[i];
    } else if (typeof inform[i] === "number") {
      x2 = inform[i];
    } else if (typeof inform[i] === "boolean") {
      if (inform[i] === true) {
        x3 = "Available For Hire";
      } else x3 = "Not Available For Hire";
    }
  }
}
