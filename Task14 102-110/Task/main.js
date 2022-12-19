// // Task1
// let inp = prompt("Enter 2 Numbers with - between them");
// if (inp.split("-")[0] > inp.split("-")[1]) {
//   for (let i = inp.split("-")[1]; i <= inp.split("-")[0]; i++) {
//     console.log(i);
//   }
// } else if (inp.split("-")[0] < inp.split("-")[1]) {
//   for (let j = inp.split("-")[0]; j <= inp.split("-")[1]; j++) {
//     console.log(j);
//   }
// }

// Task2
let counter = setTimeout(createDiv, 1000);
function createDiv() {
  let taskDiv = document.createElement("div");
  let taskH2 = document.createElement("h2");
  let taskP = document.createElement("p");
  let taskButton = document.createElement("button");
  let taskH2Text = document.createTextNode("Welcome");
  let taskButText = document.createTextNode("x");
  let taskPText = document.createTextNode("Welcome TO Elzero Web School");
  taskH2.appendChild(taskH2Text);
  taskP.appendChild(taskPText);
  taskButton.appendChild(taskButText);
  taskDiv.appendChild(taskH2);
  taskDiv.appendChild(taskP);
  taskDiv.style.backgroundColor = "grey";
  taskDiv.style.textAlign = "center";
  taskDiv.style.position = "relative";
  taskDiv.style.width = "500px";
  taskButton.style.backgroundColor = "red";
  taskButton.style.cursor = "pointer";
  taskButton.style.position = "absolute";
  taskButton.style.top = "-5px";
  taskButton.style.right = "0";
  taskButton.style.width = "20px";
  taskButton.style.height = "20px";
  taskDiv.appendChild(taskButton);
  document.body.appendChild(taskDiv);
  taskButton.onclick = function () {
    // clearTimeout(counter);
    taskDiv.style.display = "none";
  };
}

// Task3-4-5

// let div = document.querySelector("div");

// let counter = setInterval(function () {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "5") {
//     window.open("https://elzero.org", "_blank", "width=500,height=500");
//   }
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }, 200);
