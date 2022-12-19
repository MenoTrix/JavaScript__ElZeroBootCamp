// let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"]
// let myEmployees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Aw3a"]
// let showAdmin=3;
// let counter=0;
// document.write(`We Have ${showAdmin} Admins`)
// for (let i = 0; i < myAdmins.length; i++) {
//     if(myAdmins[i]==="Stop"){
//         break
//     }
//     document.write(`<h2>The Admin For Team ${i + 1} is ${myAdmins[i]} </h2>`)
//     document.write(`<br>`)
//     document.write(`Team Members:`)
//     for (let j = 0; j < myEmployees.length; j++) {
//         if(myEmployees[j].startsWith("A")&&myAdmins[i].startsWith("A")){
//             document.write(`<p>${++counter} - ${myEmployees[j]}</p>`)
//         }
//          if(myEmployees[j].startsWith("O")&&myAdmins[i].startsWith("O")){
    
//             document.write(`<p>${counter++}  - ${myEmployees[j]}</p>`)
//         }
//          if(myEmployees[j].startsWith("S")&&myAdmins[i].startsWith("S")){
//             document.write(`<p>${++counter} - ${myEmployees[j]}</p>`)
//         }
//     }
// }


let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"]
let myEmployees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Aw3a"]
let showAdmin=3;
let counter=0;
document.write(`We Have ${showAdmin} Admins`)
for (let i = 0; i < myAdmins.length; i++) {
    if(myAdmins[i]==="Stop"){
        break
    }
    document.write(`<h2>The Admin For Team ${i + 1} is ${myAdmins[i]} </h2>`)
    document.write(`<br>`)
    document.write(`Team Members:`)
    for (let j = 0; j < myEmployees.length; j++) {
        if(myEmployees[j][0]===myAdmins[i][0]){
            document.write(`<p>${++counter} - ${myEmployees[j]}</p>`)
        }
        
    }
}