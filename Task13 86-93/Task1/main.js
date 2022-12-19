// Task1;
// let number1 = document.querySelector("#elzero");
// console.log(number1);
// let number5 = document.querySelector(".element");
// console.log(number5);
// let number6 = document.querySelector("div");
// console.log(number6);
// let number7 = document.querySelector("[name='js']");
// console.log(number6);
// let number8 = document.querySelectorAll("#elzero")[0];
// console.log(number1);
// let number9 = document.querySelectorAll(".element")[0];
// console.log(number5);
// let number10 = document.querySelectorAll("div")[0];
// console.log(number6);
// let number11 = document.querySelectorAll("[name='js']")[0];
// console.log(number6);
// let number12 = document.getElementById("elzero");
// let number13 = document.body.firstElementChild;
// console.log(number13);
// let number14 = document.body.children[0];
// let number15 = document.body.childNodes[1];
// let number2 = document.getElementsByClassName("element");
// console.log(number2);
// let number3 = document.getElementsByName("js");
// console.log(number3);
// let number4 = document.getElementsByTagName("div");
// console.log(number4);

// Task2
// let imgs = document.images.length;
// for (let i = 0; i < imgs; i++) {
//   let img1 = document.images[i];
//   img1.setAttribute(
//     "src",
//     "https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png"
//   );
//   img1.setAttribute("alt", "ElZeroLogo");
//   console.log(img1);
// }

// Task3
// let inputVal = document.querySelector("[name='dollar']");
// let divRes = document.querySelector(".result");
// document.querySelector("form").oninput = function (e) {
//   divRes.innerHTML = `{${+inputVal.value}}USD Dollar = {${(
//     +inputVal.value * 24
//   ).toFixed(2)}} Egyptian Pound`;
// };

// // Task4;
// let firstDiv = document.querySelector(".one");
// let secondDiv = document.querySelector(".two");
// // firstDiv.setAttribute("title", secondDiv.innerHTML.toLowerCase());
// // secondDiv.setAttribute("title", firstDiv.innerHTML.toLowerCase());
// // secondDiv.innerHTML = `${firstDiv.innerHTML}${
// //   document.querySelectorAll("div").length
// // }`;
// // firstDiv.innerHTML = firstDiv.className;
// // Easier Solution
// firstDiv.title = firstDiv.className;
// secondDiv.title = secondDiv.className;
// firstDiv.textContent = firstDiv.className;
// secondDiv.textContent = `${secondDiv.className} ${secondDiv.attributes.length}`;

// Task5

// if (check.hasAttribute("alt")) {
//   console.log("ah");
// }
// console.log(check);

// let check = document.images.length;
// for (let i = 0; i < check; i++) {
//   if (document.images[i].hasAttribute("alt")) {
//     document.images[i].setAttribute("alt", "Old");
//   } else if (!document.images[i].hasAttribute("alt")) {
//     document.images[i].setAttribute("alt", "Elzero New");
//   }
// }

// Task6
let lastTask = document.forms[0];
let numberVal = document.querySelector("[name='elements']");
let newPar = document.createElement("div");
let resDiv = document.querySelector(".results");
let newText = document.querySelector("[name='texts']");
let selectVal = document.querySelector("select");
console.log(selectVal.value);
let button = document.querySelector("[name='create']");
console.log(button);
lastTask.onsubmit = function (e) {
  button.onclick = function () {
    resDiv.innerHTML = "";
  };
  if (numberVal.value >= 1) {
    for (let i = 0; i < numberVal.value; i++) {
      if (selectVal.value === "Div") {
        let newPar = document.createElement("div");
        newPar.textContent = newText.value;
        resDiv.append(newPar);
        newPar.className = "Box";
        newPar.setAttribute("title", "Element");
        newPar.setAttribute("id", `id-${i}`);
      } else {
        if (selectVal.value === "Section") {
          let newSection = document.createElement("section");
          newSection.textContent = newText.value;
          resDiv.append(newSection);
          newSection.className = "Box";
          newSection.setAttribute("title", "Element");
          newSection.setAttribute("id", `id-${i}`);
        }
      }
    }
  }
  e.preventDefault();
};
