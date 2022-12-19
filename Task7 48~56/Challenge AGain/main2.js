// 1
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let start = 10; start <= end; start+=10) {
//     if(start===exclude){
//         continue
//     }
//     console.log(start);
    
// }

// 2

// let start = 10;
// let end = 0;
// let stop = 3;
// for (let start = 10; start > end; start-=1) {
//     if(start===stop){
//         break
//     }
//     console.log(start);
// }

// 3
// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let start=1; start < end; start++) {
//     console.log(start);
//     console.log(`--${breaker}`);
//     console.log(`--${breaker*breaker}`);
    
// 

// 4
// let index = 10;
// let jump = 2;
// let end = 0;

// for (let index = 10; index > end; index-=jump) {
//     if(index==jump){
//         break
//     }
//    console.log(index);
    
// }

// for (;;) {
//     console.log(index);
//     index-=jump
//     if(index==jump){
//         break
//     }

// }
// 5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter=true;
// for (let i = 0; i < friends.length; i++) {
//     if(friends[i][0]==="A"){
//         continue
//     }
//     console.log(`${counter++} => ${friends[i]}`);
    
// }

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// 6
// let start = 0;
// let swappedName = "elZerO";
// let result=[]

// // Output
// "ELzERo"

// for (let i = 0; i < swappedName.length; i++) {
//     if(swappedName[i]===swappedName[i].toUpperCase()){
//         result+=swappedName[i].toLowerCase();
//     }else if(swappedName[i]===swappedName[i].toLowerCase()){
//         result+=swappedName[i].toUpperCase();
//     }
// }
// console.log(result);


// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let start = mix[0]; start < mix.length; start++) {
//     if(typeof mix[start]!=="number"){
//         continue
//     }
//     console.log(mix[start]);
    
// }
// // Output
// // 2
// // 3
// // 4


let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// while(index<friends.length){
//     if(typeof friends[index]==="number" || friends[index][counter]==="A"){
//         index++;
//         continue
//     }
//     index++;
//     console.log(friends[index]);
// }
while(index < friends.length){
    if(typeof friends[index]==="number" || friends[index].startsWith("A") ){
        index++; 
        continue
    }
    document.write(`<p>${++counter} - ${friends[index]}</p>`)
    index++;
}
    