let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let ipReg = /\d{4}:\w+\d:\d{4}:\d{4}:\d{4}\d{4}\d{4}/gi;
let ipReg = /\d{4}:\w+\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
console.log(ip.match(ipReg));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let namesReg = /Os\d*O/gi;
console.log(specialNames.match(namesReg));

// Output
// ['Os10O', 'OsO', 'Os100O']
let phone = "+(995)-123 (4567)";
let phoneRe = /[^a-z0-9]\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(phoneRe));

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\/?\s?-?\s?\d{2}\s?-?\/?\s?-?\d{2,}/gi; //

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let webRe =
  /(https?)?(:\/\/)?(www)?.?\w+.\w+(:?\d{4}?\/?(\w+)?.?(\w+)?\?\w+=\d{3}&\w+=\w+)?/gi;
let webRe2 =
  /(https?:\/\/)?(www.)?\w+.\w+:?(\d{4})?(\/\w+.\w+\?\w+=\d{3}&\w+=\w+)?/gi;
// webRe2 is better
console.log(url1.match(webRe));
console.log(url2.match(webRe));
console.log(url3.match(webRe));
console.log(url4.match(webRe));
console.log(url5.match(webRe2));
console.log(url1.match(webRe2));
console.log(url2.match(webRe2));
console.log(url3.match(webRe2));
console.log(url4.match(webRe2));
console.log(url5.match(webRe2));

let str = "mouniradel";
for (i in str) {
  // console.log(str.slice(0, i));
  console.log(str.slice(i, str.length) + str.slice(0, i).split("").join("  "));
}

console.log(userTwo.tryPrivate());
