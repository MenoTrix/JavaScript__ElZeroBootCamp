let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.4;
// Challenge 1
// Smaller Number
console.log(Math.min(a,b,c,Math.floor(d)));
// Challenge 2 
// 10000 output
console.log(a ** Math.floor(d))
// Challenge 3
// get number 2 with 4 different ways
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number.parseInt(d));

// Challenge 4
// use b + d to get 66.67 as string & 67 as number
// 66.67 as string
console.log( (Math.floor(b) / Math.ceil(d)).toFixed(2)) ;
// 67 as number
console.log( Math.ceil((Math.floor(b) / Math.ceil(d)))) ; 


// **********************************************************************************
// String Challenge

let e = "Elzero Web School";
console.log(e.slice(2,3).toUpperCase()+e.slice(3,6)); // Zero
console.log((e.slice(13,14).repeat(8).toUpperCase())); // HHHHHHHH
console.log(e.split(" ",1)); // ["Elzero"]
console.log(e.slice(0,1).toLowerCase() +e.slice(1,e.length-1)+e.slice(e.length-1).toUpperCase()); // eLZERO WEB SCHOOl
console.log(e.substr(0,6)+e.substr(10,15)); // Elzero School