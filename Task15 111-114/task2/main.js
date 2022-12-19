let name = document.querySelector("#name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");
let select = document.querySelector("#select");
name.onblur = function () {
  window.sessionStorage.setItem("name", name.value);
};
number.onblur = function () {
  window.sessionStorage.setItem("number", number.value);
};
email.onblur = function () {
  window.sessionStorage.setItem("email", email.value);
};
select.onchange = function () {
  window.sessionStorage.setItem("selectNumber", select.value);
};
name.value = window.sessionStorage.getItem("name");
number.value = window.sessionStorage.getItem("number");
email.value = window.sessionStorage.getItem("email");
select.value = window.sessionStorage.getItem("selectNumber");

// window.sessionStorage.clear();
