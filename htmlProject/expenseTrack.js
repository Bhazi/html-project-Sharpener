var form = document
  .getElementById("expenseTracking")
  .addEventListener("click", popopo);

function popopo(e) {
  if (e.target.classList.contains("submit")) {
    e.preventDefault();
    var expense = document.getElementById("expense").value;
    var descriptionText = document.getElementById("description").value;
    var categorys = document.getElementById("categorys").value;

    let object = {
      expenseTrack: expense,
      description: descriptionText,
      category: categorys,
    };
    var val = JSON.stringify(object);
    localStorage.setItem(`${expense}${categorys}`, val);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  Object.keys(localStorage).forEach((keys) => {
    var parsed = JSON.parse(localStorage.getItem(keys));
    showNewUserOnScreen(parsed);
  });
});

function showNewUserOnScreen(parsedValues) {
  var myList = document.getElementById("myList");
  var newParagraph = document.createElement("p");
  newParagraph.id = `${parsedValues.expenseTrack}${parsedValues.category}`;
  newParagraph.style.left = "35px";
  newParagraph.style.position = "relative";
  newParagraph.textContent = `${parsedValues.expenseTrack}  ${parsedValues.description}  ${parsedValues.category}`;
  myList.appendChild(newParagraph);

  var editButton = document.createElement("button");
  editButton.onclick = function () {
    editUserDetails(
      parsedValues.expenseTrack,
      parsedValues.description,
      parsedValues.category
    );
  };
  editButton.style.left = "210px";
  editButton.style.position = "absolute";
  editButton.className = "btn btn-sm btn-light";
  editButton.appendChild(document.createTextNode("Edit"));
  newParagraph.appendChild(editButton);

  var deleteButton = document.createElement("button");
  deleteButton.onclick = function () {
    deleteUser(`${parsedValues.expenseTrack}${parsedValues.category}`);
  };
  deleteButton.style.left = "260px";
  deleteButton.style.position = "absolute";
  deleteButton.className = "btn btn-sm btn-danger";
  deleteButton.appendChild(document.createTextNode("Delete"));
  newParagraph.appendChild(deleteButton);
}

function deleteUser(val) {
  localStorage.removeItem(val);
  removeUserFromScreen(val);
}

function removeUserFromScreen(phone) {
  const parentNode = document.getElementById("myList");
  const childNodeToBeDeleted = document.getElementById(phone);
  parentNode.removeChild(childNodeToBeDeleted);
}
function editUserDetails(expense, description, category) {
  document.getElementById("expense").value = expense;
  document.getElementById("description").value = description;
  document.getElementById("categorys").value = category;

  deleteUser(`${expense}${category}`);
}
