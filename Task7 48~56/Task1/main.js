// // let start = 10;
// // let end = 100;
// // let exclude = 40;

// // for(start=10; start<=end; start+=10){
// //     if (start===exclude) {
// //         continue
// //     }
// //     console.log(start);
// // }
// // // Output
// // // 10
// // // 20
// // // 30
// // // 50
// // // 60
// // // 70
// // // 80
// // // 90
// // // 100
// // // *****************************************************
// // // 2
// I Need to Checek it again

// let start = 10;
// let end = 0;
// let stop = 3;
// for(start; start >=end; start-=1){
//     if(start===stop-1){
//         break
//     }
//     console.log(start);


// }
// // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03
// // // *****************************************************
// // // 3
 
// for(start; start<=end; start++){
//     console.log(start);
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${breaker*breaker}`);
// }
// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4
// // // *****************************************************
// // // 4
// let index = 10;
// let jump = 2;
// let end = 0;

// // for(index; index>=jump; index-=2){
// //     if(index<jump*jump){
// //         break
// //     }
// //     console.log(index);
// // }
// for (;;) {
//     console.log(index);
//     index-=jump
//   if(index<jump*jump){
//     break
//   }
// }

// Output
// 10
// 8
// 6
// 4

// // // *****************************************************
// // // 5
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter=1;
// for(i=0; i<friends.length; i++){
//     if(friends[i].startsWith("A")){
//         continue
//     }
//     document.write(`<p>${counter++} => ${friends[i]} </p>  ` )
// }

// // // *****************************************************
// // // 6
// I Need to Checek it again
// let start = 0;
// let swappedName = "elZerO";
// let result=[]
// console.log(result);
// console.log(swappedName.length);
// for(start=0; start<swappedName.length; start++){
//     if(swappedName[start]=== swappedName[start].toUpperCase()){
//        result+= swappedName[start].toLowerCase()

        
//     }else if (swappedName[start]=== swappedName[start].toLowerCase()){
//        result+= swappedName[start].toUpperCase();
//     }
// }
// console.log(result);

// // Output
// "ELzERo"


// // // *****************************************************
// // // 7
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(start=mix[0]; start<mix.length; start++){
//     if(typeof mix[start]!=="number"){
//         continue
//     }
//     console.log(mix[start]);
// }
// Output
// 2
// 3
// 4

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
"1 => Sayed"
"2 => Mahmoud"

while(index < friends.length){
    if(typeof friends[index]==="number" || friends[index].startsWith("A") ){
        index++; 
        continue
    }
    document.write(`<p>${++counter} - ${friends[index]}</p>`)
    index++;
}
