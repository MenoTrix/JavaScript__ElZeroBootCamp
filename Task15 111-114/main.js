let lis1 = document.querySelectorAll("ul li");
let exp1 = document.querySelector("div");

if (window.localStorage.getItem("color")) {
  exp1.style.backgroundColor = window.localStorage.getItem("color");
  // Remove Active From the main color "red"
  lis1.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color=${window.localStorage.getItem("color")}]`)
    .classList.add("active");
} else {
  console.log("no");
}
lis1.forEach((li) => {
  // Add Click Event
  li.addEventListener("click", (e) => {
    // Remove Active From the main color "red"
    lis1.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active on click
    e.currentTarget.classList.add("active");
    // Change Div Color
    exp1.style.backgroundColor = e.currentTarget.dataset.color;
    // add Color to Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
  });
});
