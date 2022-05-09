// let names = ["first-name", "last-name", "email", "phone", "company", "address"];

// let template = `
//       <div class="submit-history-card">
//    <p >First Name:</p><p class="card-first-name label">${storedData[0]}</p>
//       <p >Last Name:</p>
//       <p class="card-last-name label">${storedData[1]}</p>
//       <p >Email:</p>
//       <p class="card-email label">${storedData[2]}</p>
//       <p >Phone:</p>
//       <p class="card-phone label">${storedData[3]}</p>
//       <p >Company:</p>
//       <p class="card-company label">${storedData[4]}</p>
//       <p >Address:</p>
//       <p class="card-address label">${storedData[5]}</p>
//       <button type="reset" class="delete-button">Delete</button>
// </div>`;

let names = ["first-name", "last-name", "email", "phone", "company", "address"];
let index = localStorage.getItem("index");
for (let j = 0; j < index; j++) {
  let tag = document.createElement("div");
  tag.classList.add("submit-history-card");
  for (let i in names) {
    let p = document.createElement("p");
    p.classList.add("card-" + names[i]);
    let label = document.createElement("label");
    let labelText = document.createTextNode(`${names[i]}: `);
    label.appendChild(labelText);
    p.appendChild(label);
    let text = document.createTextNode(
      localStorage.getItem(`card-${names[i]}${j}`)
    );
    p.appendChild(text);
    tag.appendChild(p);
  }
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button", `${j}`);
  let deleteButtonText = document.createTextNode("Delete Info");
  deleteButton.appendChild(deleteButtonText);
  tag.appendChild(deleteButton);
  document.getElementsByTagName("body")[0].appendChild(tag);
}

let deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((button) => {
  button.addEventListener("click", deleteStorage);
});
// console.log(deleteButtons);
function deleteStorage(e) {
  let index = this.classList[1];
  for (let i in names) {
    localStorage.removeItem(`card-${names[i]}${index}`);
  }
  let storedIndex = localStorage.getItem("index");
  let newIndex = storedIndex - 1;
  localStorage.setItem("index", newIndex);
  this.parentElement.remove();
}
