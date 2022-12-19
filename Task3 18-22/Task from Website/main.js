console.log(10 * 20 * 15 % 3 *  190 * 10 * 400); // 0


let num = 3;

// Solution One
console.log(num + num ); // 6

// Solution Two
console.log(num * num - num); // 6

console.log(num * --num );
console.log(num++ * num );
console.log(num ** num / num - num );
//         3 *3*3 = 27 / 3 = 9 - 3 = 6
console.log(++num * --num / --num );
//          4  * 3 = 12 / -2 = 6
console.log(num * num * num - num);
//           2 * 2 *2 - 2 = 6
// // Soultion Three
// console.log(num + true + true + true ); // 6
// // console.log(num * --num +" asdasd" ); // 6

// // Soultion Four
// console.log(++num + num + -true + -true   ); // 6

// // Solution Five
// console.log(++num + true); // 6

// // Solution Six
// console.log(++num); // 6

let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(+num1 + --num1 + --num1 - --num1 ); // 20
//           10 + 9 + 8 - 7 = 20

console.log(num1);
// Solution Three
console.log(--num1 * --num1 - num1 - num1 ); // 20
//          6    *      5   = 30 - 5 - 5 = 20           
 
// Solution Four
console.log(num1 * num1 - num1 ); // 20
//        5  * 5 -5 =20


let points = 10;

points+=3

// Write Your Code Here

console.log(points); // 13
points-=5
// Write Your Code Here

console.log(points); // 8; 


