// day=3;
// switch (day) {
//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//         console.log("Sun");
//         break;
//     case 2:
//         console.log("Mon");
//         break;
//     case 3:
//         console.log("Tues");
//         break;
//     case 4:
//         console.log("Wen");
//         break;

//     default:
//         console.log("Weekend");
// }

let job = "IT";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

switch (job) {
    case "Manager":
        salary=8000;
        console.log("Manager Salary is "+ salary);
        break;
    case "IT":
        salary=6000;
        console.log("IT Salary is "+ salary);
        break;
    case "Support":
        salary=6000;
        console.log(salary);
        break;
    case "Developer":
        salary=7000;
        console.log(salary);
        break;
    case "Designer":
        salary=7000;
        console.log(salary);
        break;

    default:
        salary=4000
        console.log(salary);
        break;
}


let holidays = 4;
let money = 0;


if(holidays==0){
    money=5000;
    console.log(`My Money is ${money}`);

}else if (holidays==2 || holidays==1){
    money=3000
    console.log(`My Money is ${money}`);

}else if (holidays==3){
    money=2000
    console.log(`My Money is ${money}`);

}
else if (holidays==4){
    money=1000
    console.log(`My Money is ${money}`);

}else if (holidays==5){
    money=0
    console.log(`My Money is ${money}`);

}else{
    money=0
    console.log(`My Money is ${money}`);

}

// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"
let day = "   wednesday2  ";
console.log(day.trim().charAt(0).toUpperCase()+day.trim().slice(1));
switch (day.trim().charAt(0).toUpperCase()+day.trim().slice(1)) {
    case  "Friday1":
        console.log("No  Available");
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Not a Valid day");
        break;
}

// console.log(Number.parseInt(Number.NEGATIVE_INFINITY));
