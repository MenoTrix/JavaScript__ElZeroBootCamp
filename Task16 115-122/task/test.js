// CHallenge on CoderHub
// txt = "Plant hope in the hearts of others";
// txt = "Nora is a very ambitious person";

// console.log(txt.split(" ").length);
// **************************************************
// Another Challenge
// word = "CoderHub";
// console.log(word.slice(0, word.length - 1));
// **************************************************
// Another CHallenge

// function is_same(name1, name2) {
//   // write your code here
//   if (name1 === name2) {
//     console.log("متشابهين");
//   } else if (name1 !== name2) {
//     console.log("غير متشابهيين");
//   }
// }
// is_same("Anas", "Anas");
//

// **************************************************

// function convert_to_seconds(hours) {
//   // write your code here
//   return console.log(hours * 60 * 60);
// }

// convert_to_seconds(6);
// **************************************************

// function stringContains(firstName, contains) {
//   // write your code here
//   if (firstName.includes(contains)) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// stringContains("Meno", "M");
// **************************************************

// function date_format(datee) {
//   // write your code here

//   console.log(
//     datee + " " + datee.replaceAll("/", "-") + " " + datee.replaceAll("/", "|")
//   );
// }
// date_format("2020/1/1");

// **************************************************
percentage = "30%";
console.log(parseInt(percentage) * 0.01);

let gab = "gabriel";
console.log(
  gab.slice(0, 3).split("").reverse().join("") +
    gab.slice(3, 4) +
    gab.slice(4, 7).split("").reverse().join("")
);
