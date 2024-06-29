const createNote = document.querySelector(".create-note");
const noteContainer = document.querySelector(".note-container");
let notes = documnent.querySelectorAll(".input-box");

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

createNote.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);
});

noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if ((e, target.tagName === "P")) {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
