var form = document.getElementById("addForm");
form.addEventListener("click", adda);

var co = 0;
function adda(e) {
  if (e.target.classList.contains("submit")) {
    e.preventDefault();
    var textItem = document.getElementById("name").value;
    var textPhone = document.getElementById("phoneNo").value;

    let object = {
      name: textItem,
      phoneNo: textPhone,
    };
    var val = JSON.stringify(object);
    localStorage.setItem(co++, val);

    // showing values
    var valueName = document.createElement("p");
    valueName.id = "newName";
    valueName.style.marginLeft = "120px";
    valueName.textContent = textItem + " " + textPhone;
    form.appendChild(valueName);

    var edit = document.createElement("button");
    edit.id = "edit";
    edit.appendChild(document.createTextNode("EDIT"));
    edit.className = "btn btn-sm edit";
    edit.style.marginLeft = "26px";
    valueName.appendChild(edit);

    var edit = document.createElement("button");
    edit.id = "delete";
    edit.appendChild(document.createTextNode("Delete"));
    edit.className = "btn btn-danger btn-sm delete";
    edit.style.marginLeft = "26px";
    valueName.appendChild(edit);
  }
}
