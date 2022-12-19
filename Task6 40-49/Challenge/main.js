//  ((((((((((((((((((((((((((((((((( 1st Solution )))))))))))))))))))))))))))))))))

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]; 
// // console.log(my.slice(zero,-2).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(my.slice(zero,++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(++zero+true);
// console.log(my.slice(zero++,counter-true).reverse()); // ["Elham", "Mazero"]
// my.splice(zero,my.length,"Elzero")
// console.log(my); //"Elzero"
// console.log(my[zero][counter++]+my[zero][counter].toUpperCase()); // "rO"

//  ((((((((((((((((((((((((((((((((( 2ND Solution )))))))))))))))))))))))))))))))))
// 1*****************************
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// my.reverse()
// my.shift()
// my.shift()
// console.log(my);   // ["Osama", "Elham", "Mazero", "Ahmed"];
// // *******************************************
// // 2
// my.shift()
// my.pop()
// console.log(my);
// console.log(my.slice(counter,zero)); // ["Mazero", "Elham",]
// // ***********************
// // 3
// my.splice(0,0,["Meno","Trix"])
// console.log(my.splice(zero,counter,"Elzero"));
// console.log(my); // Elzero
// // *****************
// // 4
// var findnumber=my[zero].indexOf("r")
// var findnumber1=my[zero].indexOf("o")
// console.log(findnumber);

// console.log(my[zero][findnumber]+my[zero][findnumber1].toUpperCase()); //"rO"

//  ((((((((((((((((((((((((((((((((( 3ND Solution )))))))))))))))))))))))))))))))))
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// my.reverse()
// console.log(my);
// console.log(my.slice(--counter)); solution
// Another Solution to Push to array
console.log(my);
my.push("Trix")
my=my.reverse()
my=my.slice(counter);
console.log(my);
// console.log(my.slice(zero,));
// ************************************
// 2
console.log(my.slice(-counter,counter)); 
// 3
// **********
my=my.slice(-counter,counter)
console.log(my.length);   // ["Mazero", "Elham",]
console.log(my[zero].slice(0,my.length)+my[my.indexOf("Mazero")].slice(my.length)); 
// ********************
// 4
my.reverse()
console.log(my);
console.log(`${my[zero][++counter]}${my[zero][++counter].toUpperCase()}`);
