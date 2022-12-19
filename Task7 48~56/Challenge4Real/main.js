    let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"]
    let myEmployees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Aw3a"]
    let showAdmin=3;
document.write(`<h1>We Have ${showAdmin} Admins</h1>`)
document.write(`<h1>We Have ${myEmployees.length} Employees</h1>`)
document.write(`<hr>`)
for (let i = 0; i < myAdmins.length; i++) {
    if(myAdmins[i]==="Stop"){
        break
    }
    document.write(`<h2>The Admin for Team ${i + 1} is ${myAdmins[i]}</h2>`)
    document.write(`<br>`)
    document.write(`<h2>Team Members:</h2>`)
    for (let j = 0; j < myEmployees.length; j++) {
    if(myEmployees[j].startsWith("A") && myAdmins[i].startsWith("A")){
        document.write(`<p>- ${myEmployees[j]}</p>`)
        }
        
        if(myEmployees[j].startsWith("O") && myAdmins[i].startsWith("O")){
      document.write(`<div> -${myEmployees[j]}</div>`)
}
        
        if(myEmployees[j].startsWith("S") && myAdmins[i].startsWith("S")){
      document.write(`<div> -${myEmployees[j]}</div>`)
}
        
    }
}

// }
// Solution from internet
// let myadmins = ["ahmed","osama","sayed","stop","samera"];
//         let myemployees = ["amgad","samah","ameer","omar","othman","amany","samia"];
//         let numadmins = myadmins.indexOf("stop");
//         document.write("<h1>" + "we have " + numadmins + " admins" + "</h1>")
//         for (let i = 0; i < myadmins.length; i++) {
//             if (myadmins[i]==="stop") {
//                 break;
//             }
//             document.write("<h2>" + "The Admin for team " + Number(i+1) + " is " + myadmins[i] + "</h2>");
//             document.write("<h3>Team members are:</h3>");
//             for (let j = 0; j < myemployees.length; j++) {
//                 if (myemployees[j][0] === myadmins[i][0]) {
//                     document.write("<p>"+"- "+myemployees[j]+"</p>")
//                 }
                
//             }
//         }

// Another Solution
// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let Number = 0;
// for (;Number <= myAdmins.length;) {
//   Number++
//   if (myAdmins[Number] === "Stop") {
//     break
//   }
// }

// document.write(`<div>We Have ${Number} Admins</div>`);
// document.write("<hr>")
// for (let i = 0; i < myAdmins.length; i++) {
//   let counter = 1;
//   if (myAdmins[i] === "Stop") break;
//   document.write(`<div>The Admin for ${i + 1} Is ${myAdmins[i]}</div>`)
//   document.write("<h3>Team Members:</h3>")
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0]) {
//       document.write(`<div>-${counter++} ${myEmployees[j]}</div>`)
//     }
//   }
//   document.write("<hr>")
// }