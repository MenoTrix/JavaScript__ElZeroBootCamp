// var discount =false
// var country="Egypt"
// var price=70;
// var alone=false
// var discountAmount=10;

// if (discount==true) {
//     if(alone==true){
        
//         price-=discountAmount+10
//     }else{
//         price-=discountAmount
//     }
// } else if (country=="Egypt") { 
//     if(alone==true){
        
//         price-=discountAmount+30
//     }else{
//         price-=discountAmount+20
//     }
// }else{
//     price=discountAmount+60
// }



// console.log(price + " Pounds");


let name="Menoyah";
let age=60;
let gender="Female"


// age==27?console.log("Perfect Age"):age >= 40 && age < 50 ?console.log("kbrt yasta"):age >= 50 && age < 60 ?console.log("y5rbetk kbrt awy"):age >= 60?console.log("b2et gedoooo"):console.log(" ");;


let a=10;
a==10?console.log(10):a >=10 && a <=40?console.log("10 to 40"):a > 40?console.log("older than 40"):console.log(unknown);


let st = "Elzero Web School";

if (st.length*2 == "34") {
    console.log("Good");
  }
console.log(st.split("").includes("w".toLocaleUpperCase()));
if (st.split("").includes("w".toUpperCase()) ||  st.split("").includes("w".toLocaleLowerCase()) === "w") {
    console.log("Good");
  }else{
    console.log("Bad");
  }
console.log( st.charAt(st.indexOf("W")).toLowerCase());
console.log(st.indexOf("W"));
console.log(st.charAt(7));
if ( st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good yasta");
  }

  if ( st !== "string") {
    console.log("Good");
  }
  if (typeof st === "number") {
    console.log("Good");
  }

  if (st.slice(0,6).repeat(2)=== "ElzeroElzero") {
    console.log("Good");
  }