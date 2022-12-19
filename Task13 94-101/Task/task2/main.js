// let inp1 = document.querySelector(".classes-to-add");
// let theDiv = document.querySelector(".classes-list").querySelector("div");
// console.log(theDiv);
// inp1.onblur = function () {
//   let mySpan = document.createElement("span");
//   let spanText = document.createTextNode(`${inp1.value}`);
//   if (inp1.value === "".trim()) {
//     spanText = " ".trim();
//   }
//   mySpan.appendChild(spanText);
//   theDiv.appendChild(mySpan);
// };
// let inp2 = document.querySelector(".classes-to-remove");

// inp2.onblur = function () {
//   let content;
//   [...theDiv.children].forEach((element) => {
//     content = element.textContent;
//   });
//   if (inp2.value === content) {
//     console.log("aiwa");
//   }
//   // if(inp2.value===theDiv.children.tex)
// };

// *****************************
let inp1 = document.querySelector(".classes-to-add");
let inp2 = document.querySelector(".classes-to-remove");
let curr = document.querySelector("[title='Current']");
let divInsideClassList = document.querySelector(".classes-list div");

function addRem() {
  document.querySelectorAll("span").forEach((element) => {
    element.remove();
  });
  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (inp1.value) {
      curr.classList.add(inp1.value.toLowerCase().trim().split(" ")[i]);
    }
    if (inp2.value) {
      curr.classList.remove(inp2.value.toLowerCase().trim().split(" ")[i]);
    }
  }
  this.value = "";
  if (curr.classList.length) {
    [...curr.classList].sort().forEach((element) => {
      let clSpan = document.createElement("span");
      clSpan.textContent = element;
      divInsideClassList.appendChild(clSpan);
    });
  } else {
    clSpan.textContent = "No Classes to Show";
  }
}
inp1.onblur = addRem;
inp2.onblur = addRem;
