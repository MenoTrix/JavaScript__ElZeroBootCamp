// Test Case 1
let num = 9; // "009"

if(num==9){
    console.log(`00${num}`);
}else if (num >10 && num <= 100){
    console.log(`0${num}`);
}else if (num > 100){
    console.log(num);
}else{
    console.log("none");
}



let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str){
    console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str && num1 !== str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 != str2 || num1 !== str2 ) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str == typeof str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"



let num11 = 10;
let num2 = 30;
let num3 = "30";
if((num3 > num11 && typeof num3 !== typeof num2 ) &&(num3 > num11 && num3 == num2 ) && (num3 !== num11 && num3 !== num2 )){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}
// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"