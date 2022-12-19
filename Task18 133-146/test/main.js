// // let test = "We Are Mounir and  we mounir are Happy";
// // let regex = /mounir/gi;
// // console.log(test.match(regex));

// let practice = "Os1 Os1Os Os2  Os8 Os8Os";
// let practiceEx = /Os[5-9]Os/gi;
// console.log(practice.match(practiceEx));

// let myString = 'AaBbcdefG123!234%^&*"';
// let aTozzSmall = /[a-z]/g;
// console.log(myString.match(aTozzSmall));
// let NotaTozzSmall = /[^a-z]/g;
// console.log(myString.match(NotaTozzSmall));
// let abe = /[abe]/g;
// console.log(myString.match(abe));
// let allLetters = /[a-zA-Z]/g;
// console.log(myString.match(allLetters));
// let allSpecials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(allSpecials));
// let aToz = /[a-z]/g;
// let aTozOpposite = /[^a-z]/g;
// let allLetters = /[^a-z]/gi;
// let allLetters2 = /[^a-zA-Z]/g;
// let specials = /[^a-z0-9]/gi;
// console.log(myString.match(allLetters));
// console.log(myString.match(allLetters2));
// console.log(myString.match(specials));
// Infinity Loop Exxampleeeeee
// let stars = "";
// for (let i = 0; i < 20; i++) {
//   for (let j = 0; j <= i; j++) {
//     document.write("🌻");
//   }
//   document.write("<br>");
// }

// let bill = prompt("What Was The Total Bill");
// let tip = prompt("What Tip you would like to pay? $10,$12 or $15");
// let people = prompt("How Many People were you?");
// let percent = 0.01;
// // document.write((+bill * tip * 0.01 + +bill) / +people`);
// let answer = (bill * (tip * percent) + +bill) / +people;

// console.log(answer.toFixed(2));

// document.write(`The Total Amout will be ${answer.toFixed(2)} $`);

// console.log(+bill);
// console.log(+bill * tip * 0.01 + +bill);
// console.log(people);
// console.log(+bill + (tip * 0.1) / +people);

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
// let emailReg = /\w+@\w+.\w+/g;
// // console.log(mails.match(emailReg));
// let nums = "0110 10 150 05120 0560 350 00";
// let NumsReg = /0\d*0/g;
// console.log(nums.match(NumsReg));
// let urls = "https://google.com http://www.website.net web.com";
// let urlReg = /(https?:\/\/)?(www.)?\w+.\w+/gi;
// console.log(urls.match(urlReg));

// let serials = "S100S S3000S S5000S S950000S";
// let serialsReg = /s\d{4,5}s/gi;
// console.log(serials.match(serialsReg));

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Meno Aspamo";
// let nameReg = /(\bspam\d|\dspam\b)/gi;
// console.log(names.match(nameReg));

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let re =
  /(https?:\/\/)?(www.)?\w+.\w+:?(\d{4})?(\/\w+.\w+\?\w+=\d{3}&\w+=\w+)?/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
