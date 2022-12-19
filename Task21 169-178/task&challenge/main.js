// const myJsFromServer = '{"name":"Mounir","age":27}';
// console.log(myJsFromServer);
// const parsing = JSON.parse(myJsFromServer);
// console.log(parsing);
// console.log(typeof parsing);
// parsing["name"] = "Trix";
// parsing["age"] = 29;

// const stringfying = JSON.stringify(parsing);
// console.log(typeof stringfying);
// console.log(stringfying);

// let tryingJson =
//   '{ "name": "Mounir","age":28,"object":{"Egypt":"cairo","Poland":"Krosno"} }';
// console.log(typeof tryingJson);
// let tryingToSwitch = JSON.parse(tryingJson);
// console.log(typeof tryingToSwitch);
// console.log(tryingToSwitch);
// tryingToSwitch["object"]["Egypt"] = "Ew3a";
// // console.log(tryingToSwitch);
// let backToJson = JSON.stringify(tryingToSwitch);
// console.log(typeof backToJson);

// function one() {
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("Two");
// }
// function three() {
//   two();
//   console.log("Three");
// }
// three();

// =============================
// =============================
// function one() {
//     console.log("One");
//   }
// =============================
// function two() {
//     one();
//     console.log("Two");
//   }
// =============================
// function three() {
//     two();
//     console.log("Three");
//   }
// =============================

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/MenoTrix/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   //   console.log(myRequest.status);
//   //   console.log(myRequest.readyState);
//   if (myRequest.status === 200 && myRequest.readyState === 4) {
//     let changingToObj = JSON.parse(myRequest.response);
//     // console.log(changingToObj);
//     for (let i = 0; i < changingToObj.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(`${changingToObj[i].name}`);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };

// =============================
// =============================

// Task1&2

let dataFromJson = new XMLHttpRequest();
dataFromJson.open("GET", "./articles.json");
dataFromJson.send();
console.log(dataFromJson);
dataFromJson.onreadystatechange = function () {
  // console.log(dataFromJson.status);
  // console.log(dataFromJson.readyState);
  if (dataFromJson.status === 200 && dataFromJson.readyState === 4) {
    if (this.response) {
      // console.log(this.response);
      // console.log("Data Loaded");
    }
    let theResponse = this.response;
    let mainData = JSON.parse(theResponse);
    for (let i = 0; i < mainData.length; i++) {
      console.log((mainData[i].category = "All"));
      let div = document.createElement("div");
      div.setAttribute("id", "data");
      let insiderDiv = document.createElement("div");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      h2.appendChild(document.createTextNode(mainData[i].title));
      p1.appendChild(document.createTextNode(mainData[i].article));
      p2.appendChild(document.createTextNode(mainData[i].author));
      p3.appendChild(document.createTextNode(`${mainData[i].category}`));
      insiderDiv.appendChild(h2);
      insiderDiv.appendChild(p1);
      insiderDiv.appendChild(p2);
      insiderDiv.appendChild(p3);
      div.appendChild(insiderDiv);
      document.body.appendChild(div);
      // console.log(div);
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    // console.log(updatedData);
  }
};
