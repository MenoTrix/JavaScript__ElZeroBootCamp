// // function Age(current,birth){
// //     if(current-birth<27){
// //         console.log("Too Young");
// //     }else{
// //         console.log(current-birth);
// //     }
// // }
// // let result=Age(2022,1995);

// // function multiply(num1,num2){
// //     return num1*num2
// // }
// // let result=multiply(10,20);
// // console.log(result);
// // function sum(...numbers){
// //    let result=0;
// //     for (let i = 0; i < numbers.length; i++) {
// //         result+=numbers[i];
// //     }
// //     return `The Final Result is ${result}`
// // }

// // console.log(sum(10,20,30,50,50));

// // function showDetail(a,b,c){
// //     if(typeof a=="string"){
// //         console.log(`Hello ${a}`);
// //     }
// //     else if(typeof a=="number"){
// //         console.log(`Your Age is ${a}`);
// //     }
// //     else if(typeof a=="boolean"){
// //        if(a==true){
// //         console.log("You Are Avaliable to Hire");
// //        }else{
// //         console.log("You aren't Avalible to hire");
// //        }
// //      console.log(`"strin g"`);
// //     }
// //     if(typeof b=="string"){
// //         console.log(`Hello ${b}`);
// //     }
// //     else if(typeof b=="number"){
// //         console.log(`Your Age is ${b}`);
// //     }
// //     else if(typeof b=="boolean"){
// //        if(b==true){
// //         console.log("You Are Avaliable to Hire");
// //        }else{
// //         console.log("You aren't Avalible to hire");
// //        }
// //     }
// //     if(typeof c=="string"){
// //         console.log(`Hello ${c}`);
// //     }
// //     else if(typeof c=="number"){
// //         console.log(`Your Age is ${c}`);
// //     }
// //     else if(typeof b=="boolean"){
// //        if(c==true){
// //         console.log("You Are Avaliable to Hire");
// //        }else{
// //         console.log("You aren't Avalible to hire");
// //        }
// //     }
// // }
// // showDetail(true,1,"Meno")

// function showDetail(a,b,c){
//     if(a=="string"){
//         console.log(`${a} ${b} ${c}`);
//     }else if(a=="number"){
//        if(b==="string"){
//         console.log(`${b} ${a}  ${c}`);
//        }else{
//         console.log(`${c} ${a} ${b}`);
//        }
//     }
//        else if(a=="boolean"){
//         console.log(`${b} ${c} ${a}`);
//        }
//     }

//     if(b=="string"){
//         console.log(`${b} ${a} ${c}`);
//     }else if(b=="number"){
//        if(a==="string"){
//         console.log(`${a} ${b}  ${c}`);
//        }else{
//         console.log(`${c} ${b} ${a}`);
//        }
//     }

//     if(c=="string"){
//         console.log(`${c} ${a} ${b}`);
//     }else if(c=="number"){
//        if(a==="string"){
//         console.log(`${b} ${a}  ${c}`);
//        }else{
//         console.log(`${c} ${a} ${b}`);
//        }
//     }
// ******************************** SOLUTION******************************************
function showDetail(a = "unknown", b = "unknown", c = "unknown") {
  typeof a === "string" && typeof b === "number" && typeof c === "boolean"
    ? console.log(`Hello ${a}, You Are ${b} Years Old , ${c}`)
    : null;

  typeof a === "string" && typeof b === "boolean" && typeof c === "string"
    ? console.log(`Hello ${b}, You Are ${a} Years Old , ${c}`)
    : null;

  typeof a === "number" && typeof b === "string" && typeof c === "boolean"
    ? console.log(`Hello ${b}, You Are ${a} Years Old , ${c}`)
    : null;
  typeof a === "boolean" && typeof b === "string" && typeof c === "number"
    ? console.log(`Hello ${b}, You Are ${c} Years Old , ${a}`)
    : null;
  typeof a === "boolean" && typeof b === "number" && typeof c === "string"
    ? console.log(`Hello ${c}, You Are ${b} Years Old , ${a}`)
    : null;
  typeof a === "number" && typeof b === "boolean" && typeof c === "string"
    ? console.log(`Hello ${c}, You Are ${a} Years Old , ${b}`)
    : null;
  if (c === true) {
    c = "You Are Avaliable for Hire";
  } else {
    c = "You Are  Not Avaliable for Hire";
  }
}

// showDetail("Mounir", 20, true);
// showDetail(20, "Meno", true);
// showDetail(true, 21, "Mounir1");
// showDetail(true, "Mounir2", 21);
// showDetail(22, true, "Trix");

// Test (Wrong Solution)

function showDetail(a = "unknown", b = "unknown", c = "unknown") {
  typeof a === "string" &&
  typeof b === "number" &&
  typeof c === "boolean" &&
  c === true
    ? console.log(
        `Hello ${a}, You Are ${b} Years Old , You Are Avaliable for hire`
      )
    : console.log(
        `Hello ${a}, You Are ${b} Years Old , You Are Not AValiable for hire`
      );

  typeof a === "string" &&
  typeof b === "boolean" &&
  typeof c === "number" &&
  b === true
    ? console.log(
        `Hello ${a}, You Are ${c} Years Old , You Are Avaliable for hire`
      )
    : console.log(
        `Hello ${a}, You Are ${c} Years Old , You Are Not AValiable for hire`
      );

  typeof a === "number" &&
  typeof b === "string" &&
  typeof c === "boolean" &&
  c === true
    ? console.log(
        `Hello ${b}, You Are ${a} Years Old , You Are Avaliable for hire`
      )
    : console.log(
        `Hello ${b}, You Are ${a} Years Old , You Are Not AValiable for hire`
      );
  typeof a === "boolean" &&
  typeof b === "string" &&
  typeof c === "number" &&
  a === true
    ? console.log(
        `Hello ${b}, You Are ${c} Years Old , You Are Avaliable for hire`
      )
    : console.log(
        `Hello ${b}, You Are ${c} Years Old , You Are Not AValiable for hire`
      );
  typeof a === "boolean" &&
  typeof b === "number" &&
  typeof c === "string" &&
  a === true
    ? console.log(
        `Hello ${c}, You Are ${b} Years Old , You Are Avaliable for hire`
      )
    : console.log(
        `Hello ${c}, You Are ${b} Years Old , You Are Not AValiable for hire`
      );
  typeof a === "number" &&
  typeof b === "boolean" &&
  typeof c === "string" &&
  b === true
    ? console.log(
        `Hello ${c}, You Are ${a} Years Old , You Are Avaliable for hire`
      )
    : console.log(
        `Hello ${c}, You Are ${a} Years Old , You Are Not AValiable for hire`
      );
}

// showDetail("Mounir", 20, false);
// showDetail("Mounir", true, 21);
// showDetail("Mounir", true, 21);
