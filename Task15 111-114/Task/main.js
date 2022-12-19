let select1 = document.querySelector("#fonts");
let select2 = document.querySelector("#colors");
let select3 = document.querySelector("#size");
if (
  window.localStorage.getItem("font") &&
  window.localStorage.getItem("color") &&
  window.localStorage.getItem("font-size")
) {
  document.body.style.fontFamily = window.localStorage.getItem("font");
  document.body.style.color = window.localStorage.getItem("color");
  document.body.style.fontSize = window.localStorage.getItem("font-size");
  select1.value = window.localStorage.getItem("font");
  select2.value = window.localStorage.getItem("color");
  select3.value = window.localStorage.getItem("font-size");
}
select1.onchange = function () {
  window.localStorage.setItem("font", select1.value);
  document.body.style.fontFamily = window.localStorage.getItem("font");
};
select2.onchange = function () {
  window.localStorage.setItem("color", select2.value);
  document.body.style.color = window.localStorage.getItem("color");
};
select3.onchange = function () {
  window.localStorage.setItem("font-size", select3.value);
  document.body.style.fontSize = window.localStorage.getItem("font-size");
};
