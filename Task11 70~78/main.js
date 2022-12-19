// Task 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let mixSolv=mix.map(function(ele){
    return !isNaN(ele)?"":ele
}).reduce(function(cat,current){
    return `${cat}${current}`
})
console.log(mixSolv);

// Task 2
// Need To be Studied Again
let myString = "EElllzzzzzzzeroo";
let newStr=myString.split("").filter(function(a,b){
    return myString.indexOf(a)===b
}).join("")
console.log(newStr);

// Task 3
let myArray = ["E", "l", "z",  ["e" , "r"], "o"];
let newArr=myArray.reduce(function(acc,current,index){
    return `${acc}${current}`.replace(",","")
})
console.log(newArr);
// Elzero

// Task 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newNum=numsAndStrings.filter(function (ele){
    return !isNaN(ele)
}).map(function (ele){
    return ele?-ele:ele
})
console.log(newNum);
// [-1, -10, 10, 20, -5, -3]

// // Task 5
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let task5=nums.reduce(function(acc,current){
//     console.log(acc+current);
//     return current % 2=== 0?  acc*current : acc+current
// })
// console.log(task5);
// // 

 let nums = [2, 12, 11, 5, 10, 1, 99];
 let task5=nums.reduce(function(acc,current){
     if(current%2===0){
        return acc*current
     }else if (current %2===1){
         return acc+current
         }
 },1)
console.log(`${task5} numbers`);
// // // 