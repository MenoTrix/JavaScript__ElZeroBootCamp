let a=10;
let b="20";
let c=80;
// console.log(++a);
console.log(++a + +b++ + +c++ - +a++);
// Value Now  11 +  20 +  80   -  11 = 100
//after update  12   21  81      12
console.log(++a + -b + +c++ - -a++ + +a);
//Value Now 13 +  -21 + 81 -  - (m3naha + ) 13  + 14 = 100
//after update 13   21   82    14    14 
//  Note  - as operator then - as Unary will be + so - - = +
console.log(--c + +b + --a * +b++  - +b * a + --a - +true);
// Value Now  81 + 21 + 13 * 21     -  22 * 13 + 12 - 1  = 100 
//  the order will be * first then + and -  so it will be 13*21  & 22 * 13 then 81 + 21 + 273 - 286 +12 -1 = 100


let d = "-100"
let e = "20"
let f = 30;
let g=true;
// 173
console.log(- d * e);
console.log(++e  * ++g + -d  + ++f); 