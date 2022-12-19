console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
// `
// Your Solutions
console.log(10*10*10*10*10); // 100000
console.log(1_000_00); // 100000
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(200000-100000); // 100000
console.log(10000000/100); // 100000
console.log(50000+50000); // 100000
console.log(100000.00); // 100000
console.log(Math.round(100000,4)); // 100000
console.log(Math.trunc(100000,2323)); // 100000
console.log(Math.ceil(99999.1)); // 100000
// 2
console.log(Math.abs(Number.MIN_SAFE_INTEGER));
// i can  use math. functions
// 3
console.log(Number.MAX_SAFE_INTEGER.toString().length);
// 4
let myVar = "100.56789 Views";
console.log(Number.parseInt(myVar));
console.log(Number.parseFloat(Number.parseFloat(myVar).toFixed(2)));
// 5    
let num = 10;
console.log(Number.isInteger(num)+Number.isInteger(num));
// 6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.ceil(flt)-Number.isInteger(num)); // 10

// 7
console.log(Math.floor(Math.random()*5));


console.log(typeof "Trix" == typeof "Meno");
