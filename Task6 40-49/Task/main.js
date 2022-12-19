let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
// console.log(myFriends.slice(0,myFriends.length--)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// ******************************************************
// 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop()
friends.shift()
 ["Eman", "Osama"]

console.log(friends);
// **********************************************3
// 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// **********************************************3
// 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let number=words.indexOf("Facebook")
console.log(number);
console.log(words[++number][0].slice(number).toUpperCase()); //ZERO
console.log(words[website.length][0].slice(website.length).toUpperCase());

// **********************************************3
// 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}
if(haystack[0]=="JS"){
    console.log("Found2");
}else if (haystack[1]=="JS"){
    console.log("Found2");

}else if (haystack[2]=="JS"){
    console.log("Found2");
}
    
if(haystack.slice(1,2)==needle){
    console.log("Found3");
}
if (haystack.indexOf(needle)) {
    console.log("Aiwa");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
// Your Code Here

console.log(allArrs.concat(arr1[arr1.indexOf("X")],arr2.slice(arr2.indexOf("F"))).join("").toLowerCase()); // fxy