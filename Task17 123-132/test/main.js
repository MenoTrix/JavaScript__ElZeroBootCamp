// let test = [1, 1, 2, 2, 3, 4, 3, 3, 3, 3];
// console.log(` The Test Array Values are ${test}`);
// let testSet = new Set().add(1).add(2);
// console.log(testSet.delete("A"));
// console.log(testSet);

// let myArray = [10, 20, 30, 40, 50, "A", "B"];
// // myArray.copyWithin(4, 6, 7);
// myArray.copyWithin(1, -2, -1);
// console.log(myArray);

// let mapTrix = new Map();
// mapTrix.set("Trix", "Adel");
// console.log(mapTrix);

// let mapUser = { theName: "MenoTrix" };
// let mapTest = new Map();
// mapTest.set(mapUser, "MenoTrix ");
// mapUser = null;
// console.log(mapTest);
// console.log("#".repeat(50));
// let weakUser = { theName: "MenoTrix" };
// let weakTest = new WeakMap();
// weakTest.set(weakUser, "MenoTrix");
// weakUser = null;
// console.log(weakTest);

// const locations = {
//   10: "Place1",
//   20: "Place2",
//   30: "Place3",
//   40: "Place4",
// };
// let mainLocation = 15;
// let objKeys = Object.keys(locations);
// console.log(objKeys);

// let numberedMap = objKeys.map(function (n) {
//   return +n;
// });
// console.log(
//   objKeys.some(function (e) {
//     return e > mainLocation;
//   })
// );
// console.log(
//   numberedMap.every(function (e) {
//     return e > mainLocation;
//   })
// );

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// // Output210

// let n3 = [...n1, ...n2];
// console.log(n3);
// let newSet = new Set();
// n3.forEach((element) => {
//   return newSet.add(element);
// });
// console.log(newSet);
// // console.log(newSet.add(n3));
// console.log("hi");

// let myData = [1, 1, 1, 3, 4, 5, 6, 7, 7, 7, 7, 7];
// let setData = new Set(myData);
// console.log(setData.entries);
// console.log(myData.length);

// const locations = {
//   10: "Place1",
//   20: "Place2",
//   30: "Place3",
//   40: "Place4",
// };
// let mainLocation = 15;
// let locArr = Object.keys(locations);
// let locationNumbers = Array.from(locArr, function (e) {
//   return +e;
// });
// console.log(locationNumbers);

// let num = locationNumbers.some(function (e) {
//   return e > this;
// }, mainLocation);

// console.log(num);
// Task1
// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(2);
// console.log(setOfNumbers);
// console.log([...setOfNumbers][2]);
// console.log(Array.from(setOfNumbers)[2]);
// ******************************************************
// Task2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let newFriends = new Set(myFriends.sort());
// console.log(newFriends);
// // Needed Output
// ******************************************************
// Task3
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// let myNewMap = new Map(Object.entries(myInfo));

// console.log(myNewMap);
// console.log(myNewMap.size);
// console.log(myNewMap.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
// ******************************************************
// Task4
// i couldn't solve it
// i couldn't solve it
// i couldn't solve it
// i couldn't solve it
// i couldn't solve it

// let theNumber = 100020003000;
// console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));
// Needed Output
// 123
// ******************************************************
// Task5
// let theName = "Elzero";
// console.log([...theName]);
// console.log(Array.from(theName));
// console.log(theName.split(""));
// console.log(Object.assign([], theName));
// console.log([...new Set(theName)]);
// // Needed Output
// // ['E', 'l', 'z', 'e', 'r', 'o']
// ******************************************************
// Task6
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// console.log(chars.sort().copyWithin(0, 3, 6));
// // Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];
// ******************************************************
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// console.log(chars.sort().copyWithin(0, 4, 8));
// // Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];
// ******************************************************
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// console.log(chars.copyWithin(2));
// // Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];
// ******************************************************
// Task7
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// let arr3 = [...numsOne, ...numsTwo];
// console.log(arr3);
// let arr4 = numsOne.concat(numsTwo);
// console.log(arr4);
// numsOne.push(...numsTwo);
// console.log(numsOne);
// ******************************************************
// Task8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Number(Math.max(...n1) * [...n1, ...n2].length));
// Needed Output
// ******************************************************
