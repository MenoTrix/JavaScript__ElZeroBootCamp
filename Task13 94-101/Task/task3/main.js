// Task3
// let myDiv = document.querySelector(".our-element");
// let myParagraph = document.querySelector("p");
// myParagraph.remove();
// let startDiv = document.createElement("div");
// let startAtt1 = startDiv.setAttribute("title", "start Element");
// let startAtt2 = startDiv.setAttribute("data-value", "Start");
// let startAtt3 = startDiv.classList.add("start");
// let startText = document.createTextNode("Start");
// startDiv.appendChild(startText);
// myDiv.before(startDiv);
// let endDiv = document.createElement("div");
// let endAtt1 = endDiv.setAttribute("title", "End Element");
// let endAtt2 = endDiv.setAttribute("data-value", "End");
// let endAtt3 = endDiv.classList.add("End");
// let endText = document.createTextNode("End");
// endDiv.appendChild(endText);
// myDiv.after(endDiv);

// Task4
// let mySpan = document.querySelector("div");
// console.log(mySpan);

// console.log(mySpan.lastChild.nodeValue.trim());
// mySpan.nextSibling.remove();
// Task5
// document.body.onclick = function () {
//   for (let i = 0; i < document.body.children.length; i++) {
//     console.log(`This is ${document.body.children[i].nodeName}`);
//   }
// };
// ... means بيفك الاراي Array
// [...document.body.children].forEach((element) => {
//   element.onclick = function () {
//     console.log(`This is ${element.localName}`);
//   };
// });

// Task4 Again
// let theDiv = document.querySelector("div");
// // console.log(theDiv.textContent.trim().slice(-6));
// console.log(theDiv.innerText.split(" ")[1]);

// Task5 Again

[...document.body.children].forEach((element) => {
  element.onclick = function () {
    console.log(`This is ${element.nodeName}`);
  };
});
