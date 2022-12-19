// let myPromise = new Promise(function (resolveFunction, rejectFunction) {
//   let connect = false;
//   if (connect) {
//     resolveFunction("asht3'lt");
//   } else {
//     rejectFunction("msht3'ltsh");
//   }
// }).then(
//   (asdasd) => console.log(asdasd),
//   (bad) => console.log(bad)
// );
// function autoGenerate(apiLink) {
//   return new Promise((resolve, reject) => {
//     let myData = new XMLHttpRequest();
//     myData.onload = function () {
//       if (myData.status === 200 && myData.readyState === 4) {
//         resolve(JSON.parse(myData.response));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };
//     myData.open("GET", apiLink);
//     myData.send();
//   });
// }

// autoGenerate("https://api.github.com/users/MenoTrix/repos")
//   .then((result) => {
//     for (let i = 0; i < result.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(`${result[i].name}`);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   })
//   .catch((rej) => console.log(rej));
// function autoGenerate(apiLink) {
//   return new Promise((resolve, reject) => {
//     let myData = new XMLHttpRequest();
//     myData.onload = function () {
//       if (myData.status === 200 && myData.readyState === 4) {
//         resolve(JSON.parse(myData.response));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };
//     myData.open("GET", apiLink);
//     myData.send();
//   });
// }

// autoGenerate("https://api.github.com/users/MenoTrix/repos")
//   .then((result) => console.log(result))
//   .catch((rej) => console.log(rej));
// let myData = new XMLHttpRequest();
// myData.onreadystatechange = function () {
//   if (myData.status === 200 && myData.readyState === 4) {
//     let dataResponse = this.response;
//     let changingDataType = JSON.parse(dataResponse);
//     // console.log(changingDataType);
//     for (let i = 0; i < changingDataType.length; i++) {
//       console.log(changingDataType[i]);
//     }
//   }
// };
// myData.open("GET", "https://api.github.com/users/MenoTrix/repos");
// myData.send();

// fetch("https://api.github.com/users/MenoTrix/repos")
//   .then((result) => {
//     // console.log(result);
//     let newData = result.json();
//     console.log(newData);
//     return newData;
//   })
//   .then((ArrOfData) => {
//     ArrOfData.length = 10;
//     // return console.log(ArrOfData[1].name);
//   });

// Task1
// let jsonData = new XMLHttpRequest();
// jsonData.open("GET", "./data.json");
// jsonData.send();
// jsonData.onload = () => {
//   return new Promise((resolve, rej) => {
//     if (jsonData.status === 200 && jsonData.readyState === 4) {
//       resolve(JSON.parse(jsonData.response));
//     } else {
//       rej(Error("No Data Found"));
//     }
//   })
//     .then((result) => {
//       result.length = 5;
//       return result;
//     })
//     .then((last5) => {
//       for (let i = 0; i < last5.length; i++) {
//         let h2 = document.createElement("h2");
//         let para = document.createElement("p");
//         h2.appendChild(document.createTextNode(last5[i].title));
//         para.appendChild(document.createTextNode(last5[i].description));
//         document.body.appendChild(h2);
//         document.body.appendChild(para);
//       }
//     })
//     .catch((res) => alert(res));
// };

// Task2

// async function test() {
//   return await fetch("./data.json");
// }
// test()
//   .then((response) => {
//     let myData = response.json();

//     return myData;
//   })
//   .then((last5) => {
//     last5.length = 5;
//     console.log(last5);
//     return last5;
//   })
//   .then((last5) => {
//     for (let i = 0; i < last5.length; i++) {
//       let h2 = document.createElement("h2");
//       let para = document.createElement("p");
//       h2.appendChild(document.createTextNode(last5[i].title));
//       para.appendChild(document.createTextNode(last5[i].description));
//       document.body.appendChild(h2);
//       document.body.appendChild(para);
//     }
//   });
// Task2 Again

// async function fetchData() {
//   let newData = await fetch("./data.json");
//   // console.log(await newData.json());
//   // let newData2 = await newData.json();
//   // console.log(newData2);
// }
// fetchData();
// **********************************
// fetch("./data.json")
//   .then((response) => {
//     let myData = response.json();
//     console.log(myData);
//     return myData;
//   })
//   .then((myData) => {
//     console.log(myData);
//     myData.length = 5;
//     console.log(myData);
//   });
// let number = 0;
// setInterval(function () {
//   console.log(number++);
// }, 1000); //run this script every 2 seconds(specified in milliseconds)

// Task is Done again

// async function testFetch() {
//   let myData = await fetch("./data.json");
//   // console.log(myData.json());
//   let last5 = await myData.json();
//   last5.length = 5;
//   // console.log(myData2);
//   for (let i = 0; i < last5.length; i++) {
//     let h2 = document.createElement("h2");
//     let para = document.createElement("p");
//     h2.appendChild(document.createTextNode(last5[i].title));
//     para.appendChild(document.createTextNode(last5[i].description));
//     document.body.appendChild(h2);
//     document.body.appendChild(para);
//   }
// }
// testFetch();
function sum_two_smallest_nums(arr, arr2) {
  return arr * arr2;
}

console.log(sum_two_smallest_nums(2, 5));
