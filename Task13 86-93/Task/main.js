// // let myDiv = document.createElement("div");
// // let myLink = document.createElement("a");
// // let myAtt = document.createAttribute("data-test");
// // let myText = document.createTextNode("Google");
// // let myComment = document.createComment("This is A Div from JS");
// // myDiv.appendChild(myComment);
// // myDiv.className = "main-div";
// // console.log(myDiv);
// // // myLink.setAttribute(myText);
// // myLink.setAttribute("href", "https://www.google.com");
// // myLink.appendChild(myText);
// // myDiv.appendChild(myLink);
// // myDiv.setAttributeNode(myAtt);
// // document.body.append(myDiv);

// // let my2ndDiv = document.createElement("div");
// // let myH3 = document.createElement("h3");
// // let myH3Text = document.createTextNode("Product1");
// // let myP = document.createElement("p");
// // let myPText = document.createTextNode("Paragraph Prod");
// // myH3.appendChild(myH3Text);
// // myH3.appendChild(myP);
// // myP.appendChild(myPText);
// // my2ndDiv.appendChild(myH3);
// // my2ndDiv.className = "product";
// // document.body.append(my2ndDiv);

// // for (let i = 0; i < 100; i++) {
// //   let my2ndDiv = document.createElement("div");
// //   let myH3 = document.createElement("h3");
// //   let myH3Text = document.createTextNode("Product1");
// //   let myP = document.createElement("p");
// //   let myPText = document.createTextNode("Paragraph Prod");
// //   myH3.appendChild(myH3Text);
// //   myH3.appendChild(myP);
// //   myP.appendChild(myPText);
// //   my2ndDiv.appendChild(myH3);
// //   my2ndDiv.className = "product";
// //   document.body.append(my2ndDiv);
// //   document.write("*************************");
// //   document.write(i + 1);
// // }

// for (let i = 0; i < 100; i++) {
//   let my2ndDiv = document.createElement("div");
//   let myH3 = document.createElement("h3");
//   let myH3Text = document.createTextNode(`Product ${i + 1}`);
//   let myP = document.createElement("p");
//   let myPText = document.createTextNode("Paragraph Prod");
//   myH3.appendChild(myH3Text);
//   my2ndDiv.appendChild(myH3);
//   my2ndDiv.appendChild(myP);
//   myP.appendChild(myPText);
//   my2ndDiv.className = "product";
//   document.body.append(my2ndDiv);
//   document.write("***************");
// }
// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");
// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;
//   console.log(userInput.value);
//   console.log(ageInput.value);

//   if ((ageInput.value = "")) {
//     userValid = true;
//   }
//   if (ageInput.value !== "") {
//     ageValid = true;
//   }
//   console.log(userValid);
//   console.log(ageValid);
//   if (userValid === false || ageValid === false) {
//     console.log("You Muse Enter a Valid Inputs");
//     e.preventDefault();
//   }
// };
document.forms[0].onsubmit = function (e) {
  let userValid = false;
  var ageValid = false;
  let inputValue1 = document.querySelector("[name='username']");
  let inputValue2 = document.querySelector("[name='age']");
  if (inputValue1.value !== "") {
    userValid = true;
  }
  if (inputValue2.value > 2) {
    ageValid = true;
  }
  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
