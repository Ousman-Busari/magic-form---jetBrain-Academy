let names = ["first-name", "last-name", "email", "phone", "company", "address"];

let form = document.getElementById("my-form");
let inputs = document.querySelectorAll("input");

let index = localStorage.getItem("index");
if (index == null) {
  index = 0;
}

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

window.onload = function () {
  //   inputs.forEach((x, i) => {
  //     x.value = localStorage.getItem(names[i]);
  //   });
  for (let i in inputs) {
    inputs[i].value = localStorage.getItem(inputs[i].name);
  }
};

function newTab() {
  inputs.forEach((x, i) => {
    x.value = localStorage.getItem(names[i]);
  });
}

setInterval(newTab, 100);

// form.addEventListener("input", function () {
//   inputs.forEach((x, i) => localStorage.setItem(String(i), x.value));
// });

function updateInfo(value, name) {
  localStorage.setItem(name, value);
}

function submitForm() {
  for (let i in names) {
    localStorage.setItem(`card-${names[i]}${index}`, inputs[i].value);
    localStorage.setItem(names[i], "");
    document.getElementsByName(names[i])[0].value = "";
  }
  //   form.reset();
  index++;
  localStorage.setItem("index", index);
}

// localStorage.clear();
