// Str challenge
let a = "Elzero Web School";
// Output is "Zero"
console.log(a.slice(2,6).charAt(0).toUpperCase()+a.slice(3,6)); 
//H and repeat it 8 times
console.log(a.slice(-6).charAt(2).toeUpperCase().repeat(8));
// Find Elzero in an array
console.log(a.split("",6));
 // Use Only "substr" Method + Template Literals In Your Solution ..Elzero School
console.log(a.substr(0,6)+a.substr(10,16));
// Solution Must Be Dynamic Because String May Changes first letter & last letter lowercase
// console.log(a.split(0,length).toUpperCase+a.slice(1)+a.substring(a.length-1).toLowerCase);
console.log(a.slice(0,1).toLowerCase()+a.slice(1,length-1)+a.slice(a.length-1).toUpperCase());


// Number challenge 
let f = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.floor(Math.min(f,c,b,d)));

console.log(f ** Math.floor(d)); // 10000
console.log(Math.round(d)); // 2
console.log(Number.parseInt(d)); // 2
console.log(Math.round(d)); // 2
console.log(Math.trunc(d)); // 2

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number
