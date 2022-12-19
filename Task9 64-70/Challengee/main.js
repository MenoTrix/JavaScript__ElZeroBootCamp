// function sayMessage(firstmsg, secondmsg) {
//   let message = "Hello";
//   //   Nested Function
//   function concat() {
//     message = `${message} ${firstmsg} ${secondmsg}`;
//   }
//   concat();
//   console.log(message);
// }
// sayMessage("meno", "Trix");

// let names = function (...names) {
//   return `String [${[names.join("][")]}] =>Done`;
// };
let names = (...names) => `String [${[names.join("][")]}] =>Done`;
console.log(names("Meno", "Adel", "Atwan", "Bekhet"));

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => `${one + two + nums[0]}`;

console.log(calc(20, 50, 10, 60));

function calculation(one, two, ...nums) {
  return `${one + two + nums[0]}`;
}
console.log(calculation(20, 50, 10, 60));
