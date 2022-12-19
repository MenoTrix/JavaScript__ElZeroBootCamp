// // function User(id, name, salary) {
// //   this.id = id;
// //   this.name = name;
// //   this.salary = salary;
// //   this.fun = function () {
// //     return "Hello Awy";
// //   };
// // }

// class User {
//   #b;
//   constructor(id, name, salary, bool) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//     this.#b = bool;
//   }
//   sayHello() {
//     return "Hello";
//   }
//   tryPrivate() {
//     return parseInt(this.#b);
//   }
// }
// class User2 extends User {
//   constructor(id, name, salary, bool) {
//     super(id, name, salary, bool);
//   }
// }

// // let userOne = new User (1, "Mounir1", 9999);
// let userTwo = new User2(2, "Mounir2", 79999, 5);
// Task 1 ******************************************************************
// class Car {
//   constructor(name, model, price) {
//     (this.name = name), (this.model = model), (this.price = price);
//     (this.start = function () {
//       return "Car is RUnning";
//     }),
//       (this.stop = function () {
//         return "Car is stopped";
//       });
//   }
//   Log() {
//     return `Car Name is ${this.name} And Model is ${this.model} And Price is  ${this.price} $`;
//   }
// }

// let car1 = new Car("Mercedes", 2022, 7777777);
// let car2 = new Car("BMW", 2022, 9999999);
// let car3 = new Car("Lamborghini", 2022, 79797979);

// console.log(car1.start());
// console.log(car2.Log());
// console.log(car3.Log());
// Task 2 ******************************************************************
// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }
// class Tablet extends Phone {
//   constructor(name, serial, price, size) {
//     super(name, serial, price), (this.size = size ? size : "Unknown");
//   }
//   fullDetails() {
//     return `${this.name} Serial is ${this.serial}, price is ${this.price} and Size is ${this.size}`;
//   }
// }

// // Write Tablet Class Here

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown
// Task 3 ******************************************************************

// Edit The Class
// let mounir = 18230129367128352;
// let mounirReg = /\d/gi;
// let newMounir = mounir.toString().match(mounirReg).join("");
// console.log(
//   newMounir.toString().slice(0, 4) +
//     "-" +
//     newMounir.toString().slice(4, 8) +
//     "-" +
//     newMounir.toString().slice(9, 13) +
//     "-" +
//     newMounir.toString().slice(13, 17)
// );
// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//   }
//   get showData() {
//     let cardNumber = this.#c;
//     let cardReg = /\d{4}/gi;
//     let newCardNumber = cardNumber.toString().match(cardReg).join("");

//     return `Hello ${this.u} Your Credit Card Number is ${
//       newCardNumber.toString().slice(0, 4) +
//       "-" +
//       newCardNumber.toString().slice(4, 8) +
//       "-" +
//       newCardNumber.toString().slice(9, 13) +
//       "-" +
//       newCardNumber.toString().slice(13, 17)
//     }`;
// Another Solution
//     return `Hello ${this.u} This is Your Credit Card Number ${this.#c
//       .toString()
//       .match(cardReg)
//       .join("-")}`;
//   }
// }

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "9876543219876543");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

// Task 4 ******************************************************************

// // Write Your Code Here
// Object.prototype.addLove = function () {
//   return `i Love ${this} Web School`;
// };

// // Do Not Edit Below
// let myStr = "ElZero";
// console.log(myStr.addLove()); // I Love Elzero Web School

// Task 5 ******************************************************************
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
});
delete myObj.country;
// Write Your Code Here

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    document.write("🎄");
  }
  document.write("<br>");
}

document.write("<br>");

for (let i = 10; i > 0; i--) {
  for (let m = i; m > 0; m--) {
    document.write("☃");
  }
  document.write("<br>");
}
