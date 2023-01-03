var form = document.getElementById("addForm");
form.addEventListener("click", adda);

function adda(e) {
  if (e.target.classList.contains("submit")) {
    e.preventDefault();
    var textItem = document.getElementById("name").value;
    var textPhone = document.getElementById("phoneNo").value;
    var mailId = document.getElementById("mailId").value;

    let object = {
      name: textItem,
      phoneNo: textPhone,
      mailid: mailId,
    };
    localStorage.setItem(mailId, JSON.stringify(object));
    axios
      .post(
        "https://crudcrud.com/api/9b97d18c6c5a44bc99f31ecf46a1c5d4/appoinment",
        object
      )
      .then((res) => showNewUserOnScreen(res.data))
      .catch((err) => console.log(err));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/9b97d18c6c5a44bc99f31ecf46a1c5d4/appoinment")
    .then((res) => {
      res.data.forEach((val) => {
        showNewUserOnScreen(val);
      });
      return res;
    })
    .catch((err) => {
      console.log(err);
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
    deleteUser(s.phoneNo, s._id);
  };
  deleteButton.style.left = "260px";
  deleteButton.style.position = "absolute";
  deleteButton.className = "btn btn-sm btn-danger";
  deleteButton.appendChild(document.createTextNode("Delete"));
  paragraph.appendChild(deleteButton);
}

//deleting in the local storage
function deleteUser(phone, id) {
  localStorage.removeItem(phone);
  axios.delete(
    `https://crudcrud.com/api/9b97d18c6c5a44bc99f31ecf46a1c5d4/appoinment/${id}`
  );
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

