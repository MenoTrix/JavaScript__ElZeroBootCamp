// // Task1
// // Create Your Object Here
// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   fullDetails: function () {
//     return `My Name is ${member.name}, My Age is ${this.age}, I Live in ${this.country}`;
//   },
// };
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt

// // Task2
// // Method One
// // Create Your Object Here
// let objMethodOne = {
//   property: "Method One",
// };
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = Object({
//   property: "Method Two",
// });
// console.log(objMethodTwo.property); // "Method Two"

// // // Method Three
// // // Create Your Object Here
// let objMethodThree = Object.create({
//   property: "Method Three",
// });
// console.log(objMethodThree.property); // "Method Three"

// // // Method Four
// // // Create Your Object Here
// let objMethodFour = Object.assign({
//   property: "Method Four",
// });
// console.log(objMethodFour.property);

// // console.log(objMethodFour.property); // "Method Four"

// // Task3
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };
// let newObj = {};

// let finalObject = Object.assign({}, { a: 1 }, threeNums, twoNums);
// // Create Your Object Here in One Line

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
console.log(myFavGames["Titan Quest"].bestThree);
// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let game = Object.keys(myFavGames);
console.log(game);
console.log(objectLength);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is `);
  console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}?`);
  console.log(`The Price Is  ${myFavGames[game[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[game[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}
