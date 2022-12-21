var form = document.getElementById("addForm");
form.addEventListener("click", adda);

function adda(e) {
  if (e.target.classList.contains("submit")) {
    e.preventDefault();
    var textItem = document.getElementById("name").value;
    var textPhone = document.getElementById("phoneNo").value;

    let object = {
      name: textItem,
      phoneNo: textPhone,
    };
    localStorage.setItem(textPhone, JSON.stringify(object));
    showNewUserOnScreen(object);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  Object.keys(localStorage).forEach((key) => {
    var s = JSON.parse(localStorage.getItem(key));
    showNewUserOnScreen(s);
  });
});

function showNewUserOnScreen(s) {
  var myList = document.getElementById("myList");
  var paragraph = document.createElement("p");
  paragraph.id = s.phoneNo;
  paragraph.style.left = "35px";
  paragraph.style.position = "relative";
  paragraph.textContent = `${s.name} - ${s.phoneNo}`;
  myList.appendChild(paragraph);

  var editButton = document.createElement("button");
  editButton.onclick = function () {
    editUserDetails(s.name, s.phoneNo);
  };
  editButton.style.left = "210px";
  editButton.style.position = "absolute";
  editButton.className = "btn btn-sm btn-primary";
  editButton.appendChild(document.createTextNode("Edit"));
  paragraph.appendChild(editButton);

  var deleteButton = document.createElement("button");
  deleteButton.onclick = function () {
    deleteUser(s.phoneNo);
  };
  deleteButton.style.left = "260px";
  deleteButton.style.position = "absolute";
  deleteButton.className = "btn btn-sm btn-danger";
  deleteButton.appendChild(document.createTextNode("Delete"));
  paragraph.appendChild(deleteButton);
}

//deleting in the local storage
function deleteUser(phone) {
  localStorage.removeItem(phone);
  removeUserFromScreen(phone);
}

//removing fromscreen
function removeUserFromScreen(phone) {
  const parentNode = document.getElementById("myList");
  const childNodeToBeDeleted = document.getElementById(phone);
  parentNode.removeChild(childNodeToBeDeleted);
}

//edit
function editUserDetails(name, phonenumber) {
  document.getElementById("name").value = name;
  document.getElementById("phoneNo").value = phonenumber;
  deleteUser(phonenumber);
}
